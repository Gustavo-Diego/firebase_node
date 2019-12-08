const firebase = require('../../conexao/firebase')

module.exports ={
    async deletar(req, res){

        await firebase.database().ref('pedidos').on('value', (snapshot)=>{
            return res.json(snapshot)
        }).then().catch((erro)=>{
            return res.json(erro)
        })
        
    }
}