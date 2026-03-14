const { Router } = require('express');

const { SignIn, SignUp } = require('../functions/auth');

const authRoutes = Router();//criação de rota somente para autenticação

authRoutes.post('/login', SignIn);//rota de login
authRoutes.post('/register', SignUp);//rota de criação de conta

module.exports = authRoutes;