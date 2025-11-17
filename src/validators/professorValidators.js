const { default: mongoose } = require('mongoose');
const yup = require('yup');

const professorSchema = yup.object().shape({
    nomeCompleto: yup.string().required('O nome do professor é obrigatório'),
    cpf: yup.number().required('O cpf do professor é obrigatório!'),
    email: yup.string().email('Email inválido').required('O email é obrigatório!!'),
    telefone: yup.number().required('O telefone é obrigatório!'),
    formacao: yup.string().required('Formação obrigatória!'),

    //ref
    departamento: yup.string()
                .required('O departamento é obrigatório!')
                .test(
                'idValidator',
                'ID de departamento é inválido',
                value => mongoose.Types.ObjectId.isValid(value)
                )
  
});

async function validarProfessor(req, res, next) {
  try {
    await professorSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

const professorSchemaAtualizacao = yup.object().shape({
  
  departamento: yup.string()
    .nullable()
    .test(
      'idValidator',
      'ID de cargo inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarAtualizacaoProfessor(req, res, next) {
  try {
    await professorSchemaAtualizacao.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

module.exports = {
  validarProfessor,
  validarAtualizacaoProfessor,
};