app.post("/ping", (req, res) => {
    console.log("Keep-alive recebido:", new Date().toISOString());
    return res.status(200).json({ ok: true});
});//Manter back end ativo

app.post("/register")