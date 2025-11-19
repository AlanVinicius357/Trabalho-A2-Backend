const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    nota01: { type: Number, required: true },
    nota02: { type: Number, required: true },
    notaFinal: { type: Number, required: true },
    aluno: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Aluno',
      required: true
    },
    Disciplina: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Disciplina',
      required: true
    },
    Turma: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Turma',
        required: true
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Notas', schema);