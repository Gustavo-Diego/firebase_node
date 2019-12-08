const firebase = require('../../conexao/firebase')

module.exports ={
    async buscar(req, res){ 

        await firebase.database().ref('Usuarios').on('value', (snapshot)=>{
            return res.json(snapshot)
        }).then().catch((erro)=>{
            return res.json(erro)
        })
        
    }
}