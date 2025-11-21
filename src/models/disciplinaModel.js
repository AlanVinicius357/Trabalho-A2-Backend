const mongoose = require('mongoose');

const disciplinaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cargaHoraria: {
    type: Number,
    required: true
  },
  curso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Curso',
    required: true
  },
  professor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Professor',
    required: true
  },
  ativo: {
    type: Boolean,
    default: true
  }
});

const Disciplina = mongoose.model('Disciplina', disciplinaSchema);

module.exports = Disciplina;
