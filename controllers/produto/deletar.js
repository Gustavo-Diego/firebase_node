const firebase = require('../../conexao/firebase')

module.exports ={
    async deletar(req, res){

        let key

        key = req.body.key
    
        await firebase.database().ref('Produtos').child(key).remove().then((produto)=>{
            return res.json(produto.key)
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}