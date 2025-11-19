const { default: mongoose } = require('mongoose');
const yup = require('yup');

const alunoSchema = yup.object().shape({
    nomeCompleto: yup.string().required('O nome do aluno é obrigatório'),
    cpf: yup.number().required('O cpf do aluno é obrigatório!'),
    email: yup.string().email('Email inválido').required('O email é obrigatório!!'),
    telefone: yup.number().required('O telefone é obrigatório!'),
    endereco: yup.string().required('O endereço é obrigatório!'),

    //ref
    matricula: yup.string()
                .required('A matricula é obrigatório!')
                .test(
                'idValidator',
                'ID de matricula é inválido',
                value => mongoose.Types.ObjectId.isValid(value)
                )
  
});

async function validarAluno(req, res, next) {
  try {
    await alunoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

const alunoSchemaAtualizacao = yup.object().shape({
  
  matricula: yup.string()
    .nullable()
    .test(
      'idValidator',
      'ID inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarAtualizacaoAluno(req, res, next) {
  try {
    await alunoSchemaAtualizacao.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

module.exports = {
  validarAluno,
  validarAtualizacaoAluno,
};