# Trabalho-A2-Backend
    Sistema Acadêmico – API Backend

# Tecnologias Utilizadas
    Node.js 
    Express.js 
    MongoDB + Mongoose 
    Yup  
    Nodemon  
    Dotenv  

# Descrição do Sistema
    Este sistema acadêmico oferece uma estrutura completa para gerenciamento escolar/universitário.
    Ele contempla os fluxos principais:

        Cadastro e gerenciamento de alunos 
        Cadastro de professores 
        Criação e administração de cursos 
        Controle de disciplinas 
        Organização de turmas 
        Registro de notas 
        Registro de frequência 
        Controle de matrículas 
        Gerenciamento de usuários do sistema (aluno/professor/admin) 

# Estrutura de Pastas da API
    /controllers
        alunoController.js
        professorController.js
        cursoController.js
        turmaController.js
        disciplinaController.js
        matriculaController.js
        notaController.js
        frequenciaController.js
        departamentoController.js
        usuarioController.js

    /models
        alunoModel.js
        professorModel.js
        cursoModel.js
        turmaModel.js
        disciplinaModel.js
        matriculaModel.js
        notaModel.js
        frequenciaModel.js
        departamentoModel.js
        usuarioModel.js

    /validators
        alunoValidators.js
        professorValidators.js
        cursoValidators.js
        turmaValidators.js
        disciplinaValidators.js
        matriculaValidators.js
        notaValidators.js
        frequenciaValidators.js
        departamentoValidators.js
        usuarioValidators.js

# Endpoints da API

    Alunos
    Método	 Endpoint	    Descrição
    GET      /alunos	    Lista todos
    GET      /alunos/:id	Busca por ID
    POST     /alunos	    Cria aluno
    PUT      /alunos/:id	Atualiza
    DELETE   /alunos/:id	Remove  

    Você replicará este padrão para todos os módulos:

    /professores
    /cursos
    /disciplinas
    /turmas
    /matriculas
    /notas
    /frequencias
    /departamentos
    /usuarios

# Exemplos de requisições

    GET /alunos

    Resposta
        {
            "idAluno": "67a1e5c87a03",
            "nomeCompleto": "João da Silva",
            "cpf": "12345678900",
            "email": "joao@email.com",
            "telefone": "99999-0000",
            "endereco": "Rua A, 123",
            "status": true
        }

    GET /alunos/:id

    Resposta
        {
            "idAluno": "67a1e5c87a03",
            "nomeCompleto": "João da Silva",
            "cpf": "12345678900",
            "email": "joao@email.com",
            "telefone": "99999-0000",
            "endereco": "Rua A, 123",
            "status": true
        }

    POST /alunos

    Requisição    
        {
            "nomeCompleto": "Maria Oliveira",
            "cpf": "98765432100",
            "email": "maria@email.com",
            "telefone": "98888-1111",
            "endereco": "Av Central, 500",
            "status": true
        }
    Resposta
        {
            "message": "Aluno criado com sucesso",
            "idAluno": "67a1ffc72a11"
        }

    PUT /alunos/:id  

    Requisição
        {
            "telefone": "90000-1234",
            "status": false
        }

    POST /professores

    Requisição
        {
            "nomeCompleto": "Carlos Mendes",
            "cpf": "12312312312",
            "email": "carlos@escola.com",
            "telefone": "98888-7777",
            "formacao": "Mestre em Matemática",
            "idDepartamentos": "6799bb21213aa"
        }
    Resposta  
        {
            "message": "Professor criado com sucesso",
        }  


# Diagrama Entidade-Relacionamento
![Diagrama](./src/image/DiagramaEntidadeRelacionamento.jpg)

# Instalação e Configuração
## 1. Clonar o repositório

    git clone [Link do Repositório](https://github.com/AlanVinicius357/Trabalho-A2-Backend)

## 2. Instalar dependências

    npm install express nodemon mongoose dotenv yup

## 3. Criar arquivo .env
 
    DB_HOST = ###
    DB_USER = ###
    DB_PASS = ###
    DB_NAME = ###

## 4. Configure o script de inicialização no package.json :

    "scripts": {
    "start": "nodemon src/index.js"
    }

## 5. Rodar o servidor

    npm start
                
# Comunicação com o Banco de Dados
### O sistema utiliza o Mongoose para conectar com o MongoDB

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

# Integrantes
    Alan Vinicius Matricula: 24114290015
    Gabriel Emídio Matricula: 24114290025
    Gabriel Francisco Matricula: 24114290169
    Luan Barboza Matricula: 24114290157
    Wendel Ferreira Matricula: 23214290003

    @AlanVinicius357
    @irn64
    @GabrielEmidi023
    @luanbsantana
    @WendelFeSa

# Collections/CRUDs desenvolvidos
## 0 - Criação das Issues do Projeto
    Criar todas as issues necessárias para organização inicial do desenvolvimento do backend, seguindo o planejamento do trabalho e a divisão entre os integrantes.
        Tarefas
        Criar todas as issues de CRUD.
        Criar issues de conexão com o MongoDB Atlas.
        Criar issue de configuração do projeto Node.js.
        Criar issue de testes iniciais no Postman.
        Criar issue de documentação no README.
        Critérios de Aceitação
        Todas as issues devem estar criadas no GitHub.
        Cada issue deve estar numerada corretamente
        Cada issue deve estar atribuída ao membro responsável.
        Responsável
        @Wendels1

## 1 - Configuração inicial do projeto
    Preparar o ambiente inicial do projeto Node.js + Express e garantir que o servidor rode corretamente.
        Tarefas
        Criar projeto Node.js
        Instalar express, mongoose, yup, dotenv, nodemo
        Criar arquivo index.js
        Configurar servidor Express
        Criar script "start" no package.json
        Critérios de Aceitação
        Projeto roda com npm start
        Servidor responde em /
        Nenhum erro de dependência
        Responsável
        @AlanVinicius357

## 2 - Configurar conexão com MongoDB Atlas
    Criar cluster, usuário e permissões no MongoDB Atlas e integrar a conexão ao backend usando Mongoose.
        Tarefas
        Criar cluster no MongoDB Atlas
        Criar usuário e permissões
        Configurar IP access
        Criar arquivo .env
        Implementar conexão com mongoose
        Critérios de Aceitaçã
        Terminal exibe “Conectado ao MongoDB”
        Sem erros de autenticação
        Strings sensíveis somente no .env
        Responsável
        @Wendels1

## 3 - Criar estrutura de pastas
    Criar toda a estrutura base do projeto conforme o padrão definido
        Tarefas
        Criar /src/controllers
        Criar /src/models
        Criar /src/validators
        Critérios de Aceitação
        Estrutura replicada exatamente como no README
        Todas pastas com um arquivo-base inicial
        Roteador principal configurado
        Responsável
        @AlanVinicius357

## 4 - Criar validador global de ID (ObjectId)
    Criar uma função de validação para IDs usando Yup e validação de ObjectId do Mongoose.
        Tarefas
        Criar função para validar ID
        Criar schema Yup
        Exportar para uso nos CRUDs
        Critérios de Aceitação
        Todas rotas com ID inválido retornam erro
        Nenhum endpoint aceita ObjectId incorreto
        Responsável
        @AlanVinicius357

## 5 - Template padrão de CRUD
    Criar um CRUD de exemplo para seguir padrão no projeto.
        Tarefas
        Criar controller base
        Criar validator base
        Criar model base
        Critérios de Aceitação
        Time utiliza o template
        Estrutura padronizada entre todos CRUDs
        Responsável
        @Wendels1

## 6 - CRUD de Cursos
    Criar CRUD completo de “Curso” com validações.
        Tarefas
        Criar cursoModel.js
        Criar cursoValidator.js
        Criar cursoController.js
        Criar rotas /cursos
        Testar todas operações
        Critérios de Aceitação:
        Endpoints GET, POST, PUT, DELETE funcionando.
        Validação Yup aplicada.
        Testes OK no Postman
        Responsável
        @AlanVinicius357

## 7 - CRUD de Professores
    Implementar CRUD completo de Professores com relacionamento Departamento.
        Tarefas
        Criar professorModel.js
        Criar professorValidator.js
        Criar professorController.js
        Criar rotas /professores
        Validar relacionamento com Departamento
        Critérios de Aceitação
        Professores criados com ID de Departamento
        Todas rotas funcionando
        Testes OK no Postman
        Responsável
        @AlanVinicius357

## 8 - CRUD de Turmas
    Criar CRUD completo de Turmas, com vínculos a Cursos, Professores e Disciplinas.
        Tarefas
        Criar turmaModel.js
        Criar turmaValidator.js
        Criar turmaController.js
        Criar rotas /turmas
        Validar relacionamentos
        Critérios de Aceitação
        Turmas criadas com vínculos corretos
        Validações funcionando
        Testes OK no Postman
        Responsável
        @AlanVinicius357

## 9 - CRUD Notas
    Implementar CRUD de Notas vinculando aluno e disciplina.
        Tarefas
        Criar notaModel.js
        Criar notaValidator.js
        Criar notaController.js
        Criar rotas /notas
        Critérios de Aceitação
        Notas associadas a aluno e disciplina
        Rejeitar notas fora do intervalo
        Testes OK no Postman
        Responsável
        @luanbsantana

## 10 - CRUD Departamento
    Desenvolver CRUD da entidade Departamento.
        Tarefas
        Criar departamentoModel.js
        Criar departamentoValidator.js
        Criar departamentoController.js
        Criar rotas /departamentos
        Critérios de Aceitação
        CRUD completo
        Retornos padronizados
        Testes OK no Postman
        Responsável
        @Wendels1

## 11 - CRUD Usuários
    Implementar CRUD completo de Usuários (Admin, Professor, Aluno).
        Tarefas
        Criar usuarioModel.js
        Criar usuarioValidator.js
        Criar usuarioController.js
        Criar rotas /usuarios
        Critérios de Aceitação
        CRUD completo
        CRUD funcionando
        Testes OK no Postman
        Responsável
        @Wendels1

## 12 - CRUD Alunos
    Criar CRUD completo de Alunos com validação e dados básicos.
        Tarefas
        Criar alunoModel.js
        Criar alunoValidator.js
        Criar alunoController.js
        Criar rotas /alunos
        Critérios de Aceitação
        Validação de CPF, email, telefone
        CRUD completo e funcionando
        Testes OK no Postman
        Responsável
        @irn64

## 13 - CRUD Matrículas
    Criar CRUD vinculando Aluno e Turma.
        Tarefas
        Criar matriculaModel.js
        Criar matriculaValidator.js
        Criar matriculaController.js
        Criar rotas /matriculas
        Validar aluno ↔ turma
        Critérios de Aceitação
        CRUD funcionando
        CRUD completo
        Testes OK no Postman
        Responsável
        @irn64

## 14 - CRUD Disciplinas
    Criar CRUD de Disciplina com relacionamento a Curso.
        Tarefa
        Criar disciplinaModel.js
        Criar disciplinaValidator.js
        Criar disciplinaController.js
        Criar rotas /disciplinas
        Critérios de Aceitação
        Disciplinas associadas corretamente
        CRUD funcional
        Testes OK no Postman
        Responsável
        @GabrielEmidi023

## 15 - CRUD Frequência
    CRUD completo para registrar presença/ausência de alunos.
        Tarefas
        Criar frequenciaModel.js
        Criar frequenciaValidator.js
        Criar frequenciaController.js
        Criar rotas /frequencias
        Critérios de Aceitação
        Frequência vinculando aluno ↔ turma
        CRUD funcional
        Testes OK no Postman
        Responsável
        @GabrielEmidi023

## 16 - Cria coleção no Postman
    Montar Collection completa com todas rotas, pastas e exemplos.
        Tarefas
        Criar collection
        Criar exemplos de POST/PUT
        Organizar por módulos
        Critérios de Aceitação
        Todas rotas testáveis pelo grupo
        Exportação entregue no repositório
        Responsável
        @AlanVinicius357

## 17 - Documentação Final
    Produzir documentação final explicando arquitetura, rotas e uso.
        Tarefas
        Revisar README
        Documentar cada módulo
        Documentar cada módulo
        Incluir instruções de instalação
        Critérios de Aceitação
        README completo e profissional
        Projeto instalável apenas seguindo o README
        Responsável
        @luanbsantana