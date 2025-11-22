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
    ref: 'Cursos',
    required: true
  },
  professor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Professores',
    required: true
  },
  ativa: {
    type: Boolean,
    default: true
  }
});

const Disciplina = mongoose.model('Disciplina', disciplinaSchema);

module.exports = Disciplina;
