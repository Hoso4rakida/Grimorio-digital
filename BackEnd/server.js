const express = require("express");

const routes = require('./routes');//arquivo com todas as rotas que serão usadas no app

const app = express();//execução do app

const PORT = 4444;//porta padrão

app.use(routes);//app usando todas as rotas
app.use(express.json());//permitir utilização de json
app.listen(PORT, ()=> console.log('Server running on PORT: ', `http://localhost:${PORT}`));//log para saber que server esta ativo

app.post("/ping", (req, res) => {
    console.log("Keep-alive recebido:", new Date().toISOString());
    return res.status(200).json({ ok: true});
});//Manter back end ativo
