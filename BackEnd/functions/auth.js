const pool = require("../database/db");
const bcrypt = require('bcrypt');

async function SignUp(req, res) {
    const {nome, email, senha} = req.body;

    try {
        //verificar se já existe
        const userExist = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1",
            [email]
        );
        if (userExist.rows.length > 0) {
            return res.status(409).json({
                erro: "Usuário já existe"
            });
        }
        //criptografar senha
        const senhaHash = await bcrypt.hash(senha, 10);

        //inserir usuário
        const newUser = await pool.query(`INSERT INTO usuarios (nome, email, senha) Values ($1, $2, $3) returning id, nome, email`,[nome, email, senhaHash]
        );
        res.status(201).json({
            mensagem: "Usuário criado",
            usuario: newUser.rows[0]
        });
    } catch (err) {
        console.log(err);

        res.status(500).json({
            erro: "Erro no servidor"
        });
    }
};

async function SignIn(req, res) {
    const {email, senha} = req.body;

    try {
        //verificar se usuário existe
        const userExist = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1",
            [email]
        );

        //Verificar se usuário existe
        if (userExist.rows.length == 0) return res.status(404).json({erro: "Email ou senha incorreto."});
        
        
        //Checar senha
        const senhaCorreta = await bcrypt.compare(senha, userExist.rows[0].senha);
        if (!senhaCorreta) return res.status(401).json({erro: "Email ou senha incorreto."});

        //separar usuário e senha
        const { senha: _, ...usuario } = userExist.rows[0];

        res.status(200).json({
            mensagem: "Usuário autenticado",
            usuario
        });
    } catch (err) {
        console.log(err);

        res.status(500).json({
            erro: "Erro no servidor"
        });
    };
};

module.exports = { SignIn, SignUp };