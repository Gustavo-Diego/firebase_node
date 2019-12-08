const firebase = require('../../conexao/firebase')

module.exports ={
    async editar(req, res){

        let key, nome, qrcode

        key = req.body.key
        nome = req.body.nome
        qrcode = req.body.qrcode
    
        await firebase.database().ref('Mesas').child(key).update({nome, qrcode}).then((mesa)=>{
            return res.json(mesa)
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}