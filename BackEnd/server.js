const express = require("express");
const routes = require('./src/routes');//arquivo com todas as rotas que serão usadas no app
const cors = require('cors');//biblioteca que impede que qualquer url faça requisiçao ao back end




const app = express();//execução do app
app.use(cors());//segurança de back end(colocar aqui url do site quando estiver pronto)
app.use(express.json());//permitir utilização de json

const PORT = 4444;//porta padrão
app.use(routes);//app usando todas as rotas
app.listen(PORT, ()=> console.log('Server running on PORT: ', `http://localhost:${PORT}`));//log para saber que server esta ativo


app.get("/", (req, res)=> {
    return res.json({ message: "Hello World"});
});//Hello World(necessário!)

app.post("/ping", (req, res) => {
    console.log("Keep-alive recebido:", new Date().toISOString());
    return res.status(200).json({ ok: true});
});//Manter back end ativo
