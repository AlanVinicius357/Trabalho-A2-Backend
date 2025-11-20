const yup = require('yup');
const mongoose = require('mongoose');

const usuarioSchema = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório'),
  senha: yup.string().required('A senha é obrigatória'),
  tipoUsuario: yup.string().required('O tipo de usuário é obrigatório'),
  ativo: yup.boolean(),

  aluno: yup.string()
    .required('O ID do aluno é obrigatório')
    .test(
      'idValido', 
      'ID de aluno inválido', 
      value => mongoose.Types.ObjectId.isValid(value)
    ),
  professor: yup.string()
    .required('O ID do professor é obrigatório')
    .test(
      'idValido', 
      'ID de professor inválido', 
      value => mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarUsuario(req, res, next) {
  try {
    await usuarioSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

const usuarioSchemaAtualizacao = yup.object().shape({
  nome: yup.string(),
  senha: yup.string(),
  tipoUsuario: yup.string(),
  ativo: yup.boolean(),

  aluno: yup.string()
    .nullable()
    .test(
      'idValido', 
      'ID de aluno inválido', 
      value => mongoose.Types.ObjectId.isValid(value)
    ),

  professor: yup.string()
    .nullable()
    .test('idValido', 
      'ID de professor inválido', 
      value => mongoose.Types.ObjectId.isValid(value)
    )
});

async function validarAtualizacaoUsuario(req, res, next) {
  try {
    await usuarioSchemaAtualizacao.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

module.exports = {
  validarUsuario,
  validarAtualizacaoUsuario
};
