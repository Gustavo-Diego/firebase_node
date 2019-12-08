const firebase = require('../../conexao/firebase')

module.exports ={
    async deletar(req, res){

        let key

        key = req.body.key
    
        await firebase.database().ref('Mesas').child(key).remove().then((mesa)=>{
            return res.json(mesa.key)
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}