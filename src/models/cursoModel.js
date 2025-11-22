const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    cargaHorariaTotal: { type: Number, required: true },
    modalidade: { type: String, required: true },
    ativo: { type: Boolean, default: true },

    departamento: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Departamentos',
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cursos', schema);
