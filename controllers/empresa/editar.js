const firebase = require('../../conexao/firebase')

module.exports ={
    async editar(req, res){

        let key, nome, filial, numero, rua, bairro, cidade, estado

        key = req.body.key
        nome = req.body.nome
        filial = req.body.filial
        numero = req.body.numero
        rua = req.body.rua
        bairro = req.body.bairro
        cidade = req.body.cidade
        estado = req.body.estado
    
        await firebase.database().ref('Empresas').child(key).update({nome, filial, numero, rua, bairro, cidade, estado}).then((empresa)=>{
            return res.json(empresa)
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}