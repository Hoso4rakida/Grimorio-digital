const express = require("express");
const bycrypt = require("bycrypt");
const pool = require("../conexão_banco/db");
const router = express.Router();
const router = require('../BackEnd/rotas/index');

const app = express();

app.use(express.json());
app.use("/register", router);
