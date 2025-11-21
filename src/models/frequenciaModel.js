const mongoose = require('mongoose');

const frequenciaSchema = new mongoose.Schema({
  aluno: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Aluno',
    required: true
  },
  disciplina: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Disciplina',
    required: true
  },
  data: {
    type: Date,
    required: true
  },
  presenca: {
    type: Boolean,
    required: true
  },
  observacao: {
    type: String,
    default: ''
  }
});

const Frequencia = mongoose.model('Frequencia', frequenciaSchema);

module.exports = Frequencia;
