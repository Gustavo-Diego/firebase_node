const firebase = require('../../conexao/firebase')

module.exports ={
    async status(req, res){

        let statusPedido, key

        statusPedido = req.body.statusPedido
        key = req.body.key
    
        await firebase.database().ref('Pedidos').child(key).update({statusPedido}).then((pedido)=>{
            return res.json(pedido)
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}