const firebase = require('../../conexao/firebase')

module.exports ={
    async deletar(req, res){

        let key

        key = req.body.key
    
        await firebase.database().ref('Empresas').child(key).remove().then((empresa)=>{
            return res.json(empresa.key)
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}