const { default: mongoose } = require('mongoose');
const yup = require('yup');

const funcionarioSchema = yup.object().shape({
    nome: yup.string().required('O nome é obrigatório!'),
    descricao: yup.string().required('A descrição do curso é obrigatória!'),
    cargaHorariaTotal: yup.number().required('A carga horária é obrigatória!'),
    modalidade: yup.string().required('A modalidade é obrigatória'),
    ativo: yup.string().required('É obrigatória o status!'),
  
    //refs
    departamento: yup.string()
    .required('O departamento é obrigatório')
    .test(
      'idValidator',
      'ID de departamento inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarCurso(req, res, next) {
  try {
    await cursoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

const cursoSchemaAtualizacao = yup.object().shape({
    nome: yup.string().required('O nome é obrigatório!'),
    descricao: yup.string().required('A descrição do curso é obrigatória!'),
    cargaHorariaTotal: yup.number().required('A carga horária é obrigatória!'),
    modalidade: yup.string().required('A modalidade é obrigatória'),
    ativo: yup.string().required('É obrigatória o status!'),
  
    //refs
    departamento: yup.string()
    .nullable()
    .test(
      'idValidator',
      'ID de departamento inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarAtualizacaoCurso(req, res, next) {
  try {
    await cursoSchemaAtualizacao.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

module.exports = {
  validarCurso,
  validarAtualizacaoCurso,
};