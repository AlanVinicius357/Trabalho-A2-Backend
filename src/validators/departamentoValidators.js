const yup = require('yup');

const departamentoSchema = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório'),
  descricao: yup.string().required('A descrição é obrigatória'),
  ativo: yup.boolean(),
});

async function validarDepartamento(req, res, next) {
  try {
    await departamentoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

const departamentoSchemaAtualizacao = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string(),
  ativo: yup.boolean(),
});

async function validarAtualizacaoDepartamento(req, res, next) {
  try {
    await departamentoSchemaAtualizacao.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

module.exports = {
  validarDepartamento,
  validarAtualizacaoDepartamento
};
