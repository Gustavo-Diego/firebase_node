const firebase = require('../../conexao/firebase')

module.exports ={
    async criar(req, res){

        let usuarioID, numeroMesa, produtos, valorTotal, desconto, formaPagamento, adicionais, empresaID, statusPagamento, statusPedido

        usuarioID = req.body.usuarioID
        numeroMesa = req.body.numeroMesa
        produtos = req.body.produtos
        valorTotal = req.body.valorTotal
        desconto = req.body.desconto
        formaPagamento = req.body.formaPagamento
        adicionais = req.body.adicionais
        empresaID = req.body.empresaID
        statusPedido = req.body.statusPedido
        statusPagamento = req.body.statusPagamento
    
        firebase.database().ref().child('Pedidos').push({usuarioID, numeroMesa, produtos, valorTotal,
            desconto, formaPagamento, adicionais, empresaID, statusPagamento, statusPedido}).then((pedido)=>{
            return res.json(pedido.key)
        }).catch((erro)=>{
            return res.json(erro)
       })
        
    }
}