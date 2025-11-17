const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nomeCompleto:{type: String, required: true},
        cpf:{type: Number, required: true},
        email:{type: String, required: true},
        telefone:{type: Number, required: true},
        formacao:{type: String, required: true},


        departamento: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Departamentos',
            required: true
        },

    },
    {timestamps: true}
);

module.exports = mongoose.model('Professores', schema)
