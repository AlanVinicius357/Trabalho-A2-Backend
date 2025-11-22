const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        anoLetivo: {type: Number, required: true},
        semestre: {type: String, required: true},
        ativo: { type: Boolean, default: true },

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