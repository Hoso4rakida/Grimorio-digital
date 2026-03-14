const express = require("express");
const bycrypt = require("bycrypt");
const pool = require("../conexão_banco/db");
const router = express.Router();
const {register} = require('../BackEnd/rotas/index');

const app = express();

app.use(express.json());

const inicio = require('./rotas/index')

app.use('/', inicio)