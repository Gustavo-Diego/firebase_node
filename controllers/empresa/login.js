const firebase = require('../../conexao/firebase')

module.exports ={
    async login(req, res){

        let email, senha

        email = req.body.email
        senha = req.body.senha

        await firebase.auth().signInWithEmailAndPassword(email, senha).then((empresa)=>{
            console.log(empresa)
            return res.json(empresa)
        }).catch((erro)=>{
         console.log(erro)
            return res.json(erro)
        })
        
    }
}