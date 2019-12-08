const firebase = require('../../conexao/firebase')

module.exports ={
    async login(req, res){

        let email, senha

        email = req.body.email

        senha = req.body.senha

        await firebase.auth().signInWithEmailAndPassword(email, senha).then((usuario)=>{
            console.log(usuario)
            return res.json(usuario)
        }).catch((erro)=>{
         verifica = erro
         console.log(erro)
         return res.json(erro)
        })
        
    }
}
    