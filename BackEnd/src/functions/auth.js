const knex = require('../database')
const bcrypt = require('bcrypt');

async function SignUp(req, res) {
    const {nome, email, senha} = req.body;

    try {
        //verificar se já existe
        const userExist = await knex('users')//diz qual tabela quer acessar
                               .where({ email })//diz onde procurar(aqui esta procurando pelo email)
                               .first();//diz para trazer apenas o primeiro resultado

        if (userExist) return res.status(409).json({ erro: "Usuário já existe" });
        //criptografar senha
        const senhaHash = await bcrypt.hash(senha, 10);

        //inserir usuário
        const newUser = await knex('users')
                             .insert({
                              name: nome,
                              email,
                              password: senhaHash
                             });

        res.status(201).json({
            mensagem: "Usuário criado",
            usuario: newUser
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
        const userExist = await knex('users').where({email}).first()

        //Verificar se usuário existe
        if (!userExist) return res.status(404).json({erro: "Email ou senha incorreto."});
        
        //Checar senha
        const senhaCorreta = await bcrypt.compare(senha, userExist.password);
        if (!senhaCorreta) return res.status(401).json({erro: "Email ou senha incorreto."});

        //separar usuário e senha
        const { senha: _, ...usuario } = userExist;

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