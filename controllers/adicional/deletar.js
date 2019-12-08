const firebase = require('../../conexao/firebase')

module.exports ={
    async deletar(req, res){

        let key

        key = req.body.key
    
        await firebase.database().ref('Adicionais').child(key).remove().then((adicional)=>{
            return res.json(adicional.key)
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}