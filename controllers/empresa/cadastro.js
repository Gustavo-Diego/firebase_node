const firebase = require('../../conexao/firebase')

module.exports ={
    async cadastro(req, res){

        let nome, email, senha, filial, numero, rua, bairro, cidade, estado

        nome = req.body.nome
        email = req.body.email
        senha = req.body.senha
        filial = req.body.filial
        numero = req.body.numero
        rua = req.body.rua
        bairro = req.body.bairro
        cidade = req.body.cidade
        estado = req.body.estado
    
        await firebase.auth().createUserWithEmailAndPassword(email, senha).then((emp)=>{
    
            firebase.database().ref().child('Empresas').push({nome, email, filial, numero, rua, bairro, cidade, estado}).then((empresa)=>{
                return res.json(empresa.key)
            }).catch((erro)=>{
                return res.json(erro)
           })
    
        }).catch((erro)=>{
            return res.json(erro)
        })
        
    }
}