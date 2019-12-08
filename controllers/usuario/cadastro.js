const firebase = require('../../conexao/firebase')

module.exports ={
    async cadastro(req, res){

        let email, senha, nome, DataNascimento

        nome = req.body.nome
        email = req.body.email
        senha = req.body.senha
        DataNascimento = req.body.DataNascimento
    
        await firebase.auth().createUserWithEmailAndPassword(email, senha).then((usuario)=>{
    
            firebase.database().ref().child('Usuarios').push({nome,email,senha, DataNascimento}).then((user) =>{
                return res.json(user.key)
            }).catch((erro)=>{
                return res.json(erro)
            })
    
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}