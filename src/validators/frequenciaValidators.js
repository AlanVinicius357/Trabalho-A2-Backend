const { default: mongoose } = require('mongoose');
const yup = require('yup');
const turmaModel = require('../models/turmaModel');

const frequenciaSchema = yup.object().shape({
  aluno: yup
    .string()
    .required('O aluno é obrigatório!')
    .test(
      'idValidator',
      'ID de aluno inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),

  disciplina: yup
    .string()
    .required('A disciplina é obrigatória!')
    .test(
      'idValidator',
      'ID de disciplina inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),

  dataAula: yup
    .date()
    .required('A data é obrigatória!'),

  presenca: yup
    .boolean()
    .required('O status de presença é obrigatório!'),

  turma: yup
    .string()
    .required('A turma é obrigatória!')
    .test(
      'idValidator',
      'ID de turma inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarFrequencia(req, res, next) {
  try {
    await frequenciaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

const frequenciaSchemaAtualizacao = yup.object().shape({
  aluno: yup
    .string()
    .nullable()
    .test(
      'idValidator',
      'ID de aluno inválido',
      value => !value || mongoose.Types.ObjectId.isValid(value)
    ),

  disciplina: yup
    .string()
    .nullable()
    .test(
      'idValidator',
      'ID de disciplina inválido',
      value => !value || mongoose.Types.ObjectId.isValid(value)
    ),

  dataAula: yup.date(),
  presenca: yup.boolean(),
  turma: yup
    .string()
    .nullable()
    .test(
      'idValidator',
      'ID de turma inválido',
      value => !value || mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarAtualizacaoFrequencia(req, res, next) {
  try {
    await frequenciaSchemaAtualizacao.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

module.exports = {
  validarFrequencia,
  validarAtualizacaoFrequencia,
};
