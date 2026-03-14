const pool = require("../conexão_banco/db");
const express = require("express");
const bycrypt = require("bycrypt");

const router = require('../BackEnd/rotas/index');

const app = express();

const PORT = 4444;

app.use(router);
app.use(express.json());
app.listen(PORT, ()=> console.log('Server running on PORT: ', `http://localhost:${PORT}`));
