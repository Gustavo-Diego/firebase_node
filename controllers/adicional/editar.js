const firebase = require('../../conexao/firebase')

module.exports ={
    async editar(req, res){

        let key, nome, preco, descricao

        key = req.body.key
        nome = req.body.nome
        preco = req.body.preco
        descricao = req.body.descricao
        imagem = req.body.imagem + req.body.empresaID
    
        await firebase.database().ref('Adicionais').child(key).update({nome, preco, descricao, imagem}).then((adicional)=>{
            return res.json(adicional)
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}