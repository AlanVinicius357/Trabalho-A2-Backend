const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    tipoUsuario: { type: String, required: true },
    ativo: { type: Boolean, default: true },
    idAluno: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Aluno',
      default: null
    },
    idProfessor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Professor',
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Usuarios', schema);
