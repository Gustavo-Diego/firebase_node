const express = require('express')
const firebase = require('firebase')
const firebaseConfig = require('./firebase') 
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())

//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

firebase.initializeApp(firebaseConfig)

//rota raiz
app.get('/', (req, res)=>{
    res.send('funciona')
})

//rota de teste
app.post('/teste', (req, res)=>{
    res.send(req.body.teste)
    console.log(req.body.teste)
})

//rotas para usuários
// autenticação com firebase
//rota de login
 app.post('/logarUsuario', async (req, res)=>{

    await firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.senha).then((usuario)=>{
        console.log(usuario)
        res.json(usuario)
    }).catch((erro)=>{
     verifica = erro
     console.log(erro)
     res.json(erro)
    })

})

//rota de cadastro de usuário
app.post('/cadastroUsuario', async (req, res)=>{

    let  email, senha, nome

    nome = req.body.nome
    email = req.body.email
    senha = req.body.senha

    await firebase.auth().createUserWithEmailAndPassword(email, senha).then((usuario)=>{

        firebase.database().ref().child('Usuarios').push({nome,email,senha}).then((user) =>{
            res.json(user.key)
        }).catch((erro)=>{
            res.json(erro)
        })

    }).catch((erro)=>{
        res.json(erro)
    })

})

//rota de buscar todos os usuários no banco de dados
app.get('/buscarUsuario', async (req, res)=>{

    await firebase.database().ref('Usuarios').on('value', (snapshot)=>{
        res.json(snapshot)
    }).then().catch((erro)=>{
        res.json(erro)
    })
})

//rota de editar dados de usuário
app.post('/editarUsuario', async (req, res)=>{

    let key, nome

    key = req.body.key
    nome = req.body.nome

    await firebase.database().ref('Usuarios').child(key).update({nome}).then((usuario)=>{
        res.json(usuario)
    }).catch((erro)=>{
        res.json(erro)
    })

})

//rota de delatar dados do usuário no banco
app.delete('/deletarUsuario', async (req, res)=>{

    let key, uid

    key = req.body.key
    uid = req.body.key

    if(key == '' || uid == ''){
        res.json('erro')
    }else{

        await firebase.auth().delete(uid).then(()=>{

            firebase.database().ref('Usuarios').child(key).remove().then((produto)=>{
                res.json(produto.key)
            }).catch((erro)=>{
                res.json(erro)
            })
    
        }).catch((erro)=>{
            res.json(erro)
        })

    }
})

//rotas para empresas onde pode gerenciar produtos e mesas
//usando real-database do firebase
//rota de cadastro de protudo
app.post('/cadastroProduto', async (req, res)=>{

    let nome, preco

    nome = req.body.nome
    preco = req.body.preco

    await firebase.database().ref().child('Produtos').push({nome, preco}).then((produto)=>{
        res.json(produto.key)
    }).catch((erro)=>{
        res.json(erro)
    })

})

//rota de buscar produtos
app.get('/buscarProduto', async (req, res)=>{

    await firebase.database().ref('Produtos').on('value', (snapshot)=>{
        res.json(snapshot)
    }).then().catch((erro)=>{
        res.json(erro)
    })
})

//rota de editar produtos
app.post('/editarProduto', async (req, res)=>{

    let key, nome, preco

    key = req.body.key
    nome = req.body.nome
    preco = req.body.preco

    await firebase.database().ref('Produtos').child(key).update({nome, preco}).then((produto)=>{
        res.json(produto)
    }).catch((erro)=>{
        res.json(erro)
    })

})

//rota de delatar produtos
app.delete('/deletarProduto', async (req, res)=>{

    let key

    key = req.body.key

    await firebase.database().ref('Produtos').child(key).remove().then((produto)=>{
        res.json(produto.key)
    }).catch((erro)=>[
        res.json(erro)
    ])
})

//rota de cadastro de mesa
app.post('/cadastroMesa', async (req, res)=>{

    let nome, qrcode

    nome = req.body.nome
    qrcode = req.body.qrcode

    await firebase.database().ref().child('Mesas').push({nome, qrcode}).then((mesa)=>{
        res.json(mesa.key)
    }).catch((erro)=>{
        res.json(erro)
    })

})

//rota de buscar mesas, n é muito interesante criar essa rota aqui no backend no caso dos pedidos
app.get('/buscarMesa', async (req, res)=>{

    await firebase.database().ref('Mesas').on('value', (snapshot)=>{
        res.json(snapshot)
    }).then().catch((erro)=>{
        res.json(erro)
    })
})

//rota de editar mesas
app.post('/editarMesa', async (req, res)=>{

    let key, nome, qrcode

    key = req.body.key
    nome = req.body.nome
    qrcode = req.body.qrcode

    await firebase.database().ref('Mesas').child(key).update({nome, qrcode}).then((mesa)=>{
        res.json(mesa)
    }).catch((erro)=>{
        res.json(erro)
    })

})

//rota de delatar produtos
app.delete('/deletarMesa', async (req, res)=>{

    let key

    key = req.body.key

    await firebase.database().ref('Mesas').child(key).remove().then((mesa)=>{
        res.json(mesa.key)
    }).catch((erro)=>[
        res.json(erro)
    ])
})

//rotas de autenticação de empresas e cadastro
//rota de cadastro de empresa
app.post('/cadastroEmpresa', async (req, res)=>{

    let nome, email, senha

    nome = req.body.nome
    email = req.body.email
    senha = req.body.senha

    await firebase.auth().createUserWithEmailAndPassword(email, senha).then((emp)=>{

        firebase.database().ref().child('Empresas').push({nome, email, nome}).then((empresa)=>{
            res.json(empresa.key)
        }).catch((erro)=>{
            res.json(erro)
       })

    }).catch((erro)=>{
        res.json(erro)
    })

})


//rota de buscar empresas
app.get('/buscarEmpresa', async (req, res)=>{

    await firebase.database().ref('Empresas').on('value', (snapshot)=>{
        res.json(snapshot)
    }).then().catch((erro)=>{
        res.json(erro)
    })
})

//rota de editar daods da empresa
app.post('/editarEmpresa', async (req, res)=>{

    let key, nome, email

    key = req.body.key
    nome = req.body.nome
    email = req.body.email

    await firebase.database().ref('Empresas').child(key).update({nome, email}).then((empresa)=>{
        res.json(empresa)
    }).catch((erro)=>{
        res.json(erro)
    })
})

//rota de delatar dados da empresa no banco de dados
app.delete('/deletarEmpresa', async (req, res)=>{

    let key

    key = req.body.key

    await firebase.database().ref('Empresas').child(key).remove().then((empresa)=>{
        res.json(empresa.key)
    }).catch((erro)=>[
        res.json(erro)
    ])
})

app.listen(3003)