const express = require('express')
const app = express()

app.use(express.json())

// conexão banco
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)
  .then(() => {
    console.log("Conectado ao MongoDB")
  })
  .catch(err => {
    console.log("Erro ao conectar no banco MongoDB: ", err)
  })

// controladores e rotas
const notaController = require('./controllers/notaController');
app.use(notaController);

const usuarioController = require('./controllers/usuarioController');
app.use(usuarioController);

const departamentoController = require('./controllers/departamentoController');
app.use(departamentoController);

// ➕ ***ADICIONADO AGORA***
const disciplinaController = require('./controllers/disciplinaController');
app.use(disciplinaController);

const frequenciaController = require('./controllers/frequenciaController');
app.use(frequenciaController);

const alunoController = require('./controllers/alunoController');
app.use(alunoController);

const matriculaController = require('./controllers/matriculaController');
app.use(matriculaController);

const turmaController = require('./controllers/turmaController');
app.use(turmaController);

const professorController = require('./controllers/professorController');
app.use(professorController);

const cursoController = require('./controllers/cursoController');
app.use(cursoController);

// iniciar servidor
app.listen(3000, () => {
  console.log("Aplicação rodando em http://localhost:3000")
})
