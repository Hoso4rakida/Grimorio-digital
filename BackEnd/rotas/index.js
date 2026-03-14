app.post("/ping", (req, res) => {
    console.log("Keep-alive recebido:", new Date().toISOString());
    return res.status(200).json({ ok: true});
});//Manter back end ativo

app.post("/register", async (req, res) => {
    const {nome, email, senha} = req.body;

    try {
        //verificar se já existe
        const userExist = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1",
            [email]
        );
        if (userExist.rows.length > 0) {
            return res.status(400).json({
                erro: "Usuário já existe"
            });
        }
        //criptografar senha
        const senhaHash = await bycrypt.hash(senha, 10);

        //inserir usuário
        const newUser = await pool.query(`INSERT INTO usuarios (nome, email, senha) Values ($1, $2, $3) returning id, nome, email`,[nome, email, senhaHash]
        );
        res.status(201).json({
            mensagem: "Usuário criado",
            usuario: newUser.rows[0]
        });
    } catch (err) {
        console.log(error);

        res.status(500).json({
            erro: "Erro no servidor"
        });
    }
});
//Rota de Registro de usuário