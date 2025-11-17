const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        nome: {Type: String, required: true},
        anoLetivo: {Type: Number, required: true},
        semestre: {Type: String, required: true},
        ativo: {Type: String, required: true},

        //refs
        curso: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cursos',
            required: true
        },
        professor:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Professores',
            required: true
        }
    },
    
{ timestamps: true }

);

module.exports = mongoose.model('Turmas', schema);