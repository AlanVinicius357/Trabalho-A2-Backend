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
        indexValidators.js

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

# Diagrama Entidade-Relacionamento
![Diagrama](./src/image/DiagramaEntidadeRelacionamento.jpg)
