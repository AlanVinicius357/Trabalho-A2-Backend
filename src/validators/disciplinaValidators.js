const { default: mongoose } = require('mongoose');
const yup = require('yup');

const disciplinaSchema = yup.object().shape({
  nome: yup.string().required('O nome da disciplina é obrigatório!'),
  cargaHoraria: yup
    .number()
    .required('A carga horária é obrigatória!'),
  

  // refs
  curso: yup
    .string()
    .required('O curso é obrigatório!')
    .test(
      'idValidator',
      'ID de curso inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),

  professor: yup
    .string()
    .required('O professor é obrigatório!')
    .test(
      'idValidator',
      'ID de professor inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),

  ativo: yup.boolean().default(true),
});

async function validarDisciplina(req, res, next) {
  try {
    await disciplinaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

const disciplinaSchemaAtualizacao = yup.object().shape({
  nome: yup.string(),
  cargaHoraria: yup.number(),
  

  curso: yup
    .string()
    .nullable()
    .test(
      'idValidator',
      'ID de curso inválido',
      value => !value || mongoose.Types.ObjectId.isValid(value)
    ),

  professor: yup
    .string()
    .nullable()
    .test(
      'idValidator',
      'ID de professor inválido',
      value => !value || mongoose.Types.ObjectId.isValid(value)
    ),

  ativo: yup.boolean(),
});

async function validarAtualizacaoDisciplina(req, res, next) {
  try {
    await disciplinaSchemaAtualizacao.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

module.exports = {
  validarDisciplina,
  validarAtualizacaoDisciplina,
};
