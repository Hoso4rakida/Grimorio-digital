const { Router } = require("express");

const authRoutes = require('./auth.routes');//rotas de autenticação do usuário(SignUp, SignIn)

const routes = Router();

routes.use('/auth', authRoutes);

module.exports = routes;
//arquivo principal das rotas

