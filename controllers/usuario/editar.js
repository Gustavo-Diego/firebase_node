const firebase = require('../../conexao/firebase')

module.exports ={
    async editar(req, res){

        let key, nome

        key = req.body.key
        nome = req.body.nome
    
        await firebase.database().ref('Usuarios').child(key).update({nome}).then((usuario)=>{
            return res.json(usuario)
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}