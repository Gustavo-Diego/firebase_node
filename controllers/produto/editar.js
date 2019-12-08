const firebase = require('../../conexao/firebase')

module.exports ={
    async editar(req, res){

        let key, nome, preco, descricao, imagem

        key = req.body.key
        nome = req.body.nome
        preco = req.body.preco
        descricao = req.body.descricao
        imagem = req.body.imagem + req.body.empresaID
    
        await firebase.database().ref('Produtos').child(key).update({nome, preco, descricao, imagem}).then((produto)=>{
            return res.json(produto)
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}