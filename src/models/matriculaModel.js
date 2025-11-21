const mongoose = require('mongoose')

const schema = new mongoose.Schema({

    aluno: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alunos',
    required: true
    },
    turma: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Turma',
        required: true
    },
    dataMatricula: {
        type: Date,
        required: true
    },
    
    status: {
        type: String,
        required: true
    }
},
{timestamps: true}
);

module.exports = mongoose.model('Matricula', schema);