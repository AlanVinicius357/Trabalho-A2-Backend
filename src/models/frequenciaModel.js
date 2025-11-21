const mongoose = require('mongoose');

const frequenciaSchema = new mongoose.Schema({
  aluno: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Aluno',
    required: true
  },

  dataAula: {
    type: Date,
    required: true
  },
  presenca: {
    type: Boolean,
    required: true
  },
  disciplina: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Disciplina',
    required: true
  },
  turma: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Turma',
    required: true
  }
});

const Frequencia = mongoose.model('Frequencia', frequenciaSchema);

module.exports = Frequencia;
