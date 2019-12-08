const firebase = require('../../conexao/firebase')

module.exports ={
    async cadastro(req, res){

        let nome, qrcode

        nome = req.body.nome
        qrcode = req.body.qrcode
    
        await firebase.database().ref().child('Mesas').push({nome, qrcode}).then((mesa)=>{
            return res.json(mesa.key)
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}