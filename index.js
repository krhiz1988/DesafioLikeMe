const express = require("express");
const cors = require("cors");
const { obtenerPosts, agregarPost } = require("./consultas");

const app = express();
app.use(express.static('./'))
app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/posts', async (req, res) => {
    const posts = await obtenerPosts()
    res.json(posts);
});

app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion} = req.body;

    await agregarPost(titulo, url, descripcion)

    res.send("Post agregado con éxito")
})

app.listen(3000, console.log('El servidor esta encendido'))
