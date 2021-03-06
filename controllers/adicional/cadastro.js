const firebase = require('../../conexao/firebase')

module.exports ={
    async cadastro(req, res){

        let nome, preco, descricao, empresaID, imagem

        nome = req.body.nome
        preco = req.body.preco
        descricao = req.body.descricao
        empresaID = req.body.empresaID
        imagem = req.body.imagem + req.body.empresaID
    
        await firebase.database().ref().child('Adicionais').push({nome, preco, descricao, empresaID, imagem}).then((adicional)=>{
            return res.json(adicional.key)
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}