const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const rotas = require('./routes/routes')

const app = express() 

app.use(cors())

const porta = process.env.PORT || 3003; // porta de conexão

//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(rotas)

app.listen(porta, ()=>{
    console.log(`o servidor conectado ao firebase está rodando na por http://localhost:${porta}`)
})