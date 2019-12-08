const firebase = require('../../conexao/firebase')

module.exports ={
    async deletar(req, res){

        let key, uid

        key = req.body.key
        uid = req.body.key
    
        if(key == '' || uid == ''){
            res.json('erro')
        }else{
            await firebase.auth().delete(uid).then(()=>{
    
                firebase.database().ref('Usuarios').child(key).remove().then((produto)=>{
                    return res.json(produto.key)
                }).catch((erro)=>{
                    return res.json(erro)
                })
        
            }).catch((erro)=>{
                return res.json(erro)
            })
        }
        
    }
}