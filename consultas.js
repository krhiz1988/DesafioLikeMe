const { Pool } = require("pg");

const credenciales = {
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "likename",
  port: "5432",
  allowExitOnIdle: true,
};

const clientBD = new Pool(credenciales);

const agregarPost = async (titulo, url, descripcion) => {
  const consulta =
    "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3)";
  const data = [titulo, url, descripcion];
  const response = await clientBD.query(consulta, data);
  return response;
};

const obtenerPosts = async () => {
  const consulta = "SELECT * FROM posts";
  const { rows } = await clientBD.query(consulta);
  return rows;
};

module.exports = { agregarPost, obtenerPosts };
