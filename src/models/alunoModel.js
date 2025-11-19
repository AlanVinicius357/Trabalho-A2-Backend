const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nomeCompleto:{type: String, required: true},
        cpf:{type: Number, required: true},
        email:{type: String, required: true},
        telefone:{type: Number, required: true},
        endereco:{type: String, required: true},
        status:{type: String, required: true},


        matricula: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Matricula',
            required: true
        },

    },
    {timestamps: true}
);

module.exports = mongoose.model('Alunos', schema)
