const express = require('express')

const loginUsuario = require('../controllers/usuario/login')
const cadastroUsuario = require('../controllers/usuario/cadastro')
const buscarUsuario = require('../controllers/usuario/buscar')
const editarUsuario = require('../controllers/usuario/editar')
const deletarUsuario = require('../controllers/usuario/deletar')

const cadastroProduto = require('../controllers/produto/cadastro')
const buscarProduto = require('../controllers/produto/buscar')
const editarProduto = require('../controllers/produto/editar')
const deletarProduto = require('../controllers/produto/deletar')

const cadastroAdicional = require('../controllers/adicional/cadastro')
const buscarAdicional = require('../controllers/adicional/buscar')
const editarAdicional = require('../controllers/adicional/editar')
const deletarAdicional = require('../controllers/adicional/deletar')

const cadastroMesa = require('../controllers/mesa/cadastro')
const buscarMesa = require('../controllers/mesa/buscar')
const editarMesa = require('../controllers/mesa/editar')
const deletarMesa = require('../controllers/mesa/deletar')

const logarEmpresa = require('../controllers/empresa/login')
const cadastroEmpresa = require('../controllers/empresa/cadastro')
const buscarEmpresa = require('../controllers/empresa/buscar')
const editarEmpresa = require('../controllers/empresa/editar')
const deletarEmpresa = require('../controllers/empresa/deletar')

const criarPedido = require('../controllers/pedido/criar')
const hitoricoPedido = require('../controllers/pedido/historico')
const statusPedido = require('../controllers/pedido/status')

const rotas = express.Router() // usando a propriedade de rotas do express

//rotas

//rotas para usuários

// autenticação com firebase
//rota login de usuário
rotas.post('/logarUsuario', loginUsuario.login)

//rota de cadastro de usuário
rotas.post('/cadastroUsuario', cadastroUsuario.cadastro)

//rota de buscar todos os usuários no banco de dados ROTA ESPECIAL
rotas.get('/buscarUsuario', buscarUsuario.buscar)

//rota de editar dados de usuário
rotas.post('/editarUsuario', editarUsuario.editar)

//rota de delatar dados do usuário no banco
rotas.delete('/deletarUsuario', deletarUsuario.deletar)

//rotas para empresas onde pode gerenciar produtos

//usando real-database do firebase
//rota de cadastro de protudo a imagem será carregado pelo front end e lincar o nome ao produto da email pelo banco de dados
rotas.post('/cadastroProduto', cadastroProduto.cadastro)

//rota de buscar produtos
rotas.get('/buscarProduto', buscarProduto.buscar)

//rota de editar produtos
rotas.post('/editarProduto', editarProduto.editar)

//rota de delatar produtos
rotas.delete('/deletarProduto', deletarProduto.deletar)

//rota para adicionais

//rota de cadastro de adicionais
rotas.post('/cadastroAdicional', cadastroAdicional.cadastro)

//rota de buscar adicionais
rotas.get('/buscarAdicional', buscarAdicional.buscar)

//rota de editar adicional
rotas.post('/editarAdicional', editarAdicional.editar)

//rota de delatar Adicional
rotas.delete('/deletarAdicional', deletarAdicional.deletar)

//rotas para empresas onde pode gerenciar mesas

//rota de cadastro de mesa
rotas.post('/cadastroMesa', cadastroMesa.cadastro)

//rota de buscar mesas, n é muito interesante criar essa rota aqui no backend no caso dos pedidos
rotas.get('/buscarMesa', buscarMesa.buscar)

//rota de editar mesas
rotas.post('/editarMesa', editarMesa.editar)

//rota de delatar mesa
rotas.delete('/deletarMesa', deletarMesa.deletar)

//rotas de autenticação de empresas e cadastro

//rota login de empresa
rotas.post('/logarEmpresa', logarEmpresa.login)

//rota de cadastro de empresa
rotas.post('/cadastroEmpresa', cadastroEmpresa.cadastro)

//rota de buscar empresas
rotas.get('/buscarEmpresa', buscarEmpresa.buscar)

//rota de editar daods da empresa
rotas.post('/editarEmpresa', editarEmpresa.editar)

//rota de delatar dados da empresa no banco de dados
rotas.delete('/deletarEmpresa', deletarEmpresa.deletar)

//rota para pedidos

//rota de criação do pedido feito pelo usuário 
rotas.post('/criarPedido', criarPedido.criar)

//rota de hitórico de pedidos de usuários e empresas
rotas.get('/hitoricoPedido', hitoricoPedido.deletar)

//rota para mudar o status do pedido
rotas.get('/statusPedido', statusPedido.status)

module.exports = rotas