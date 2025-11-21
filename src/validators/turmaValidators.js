const mongoose = require('mongoose');
const yup = require('yup')

const turmaSchema = yup.object().shape({
    nome: yup.string().required('O nome da turma é obrigatório!'),
    anoLetivo: yup.number().required('O ano letivo é obrigatório!'),
    semestre: yup.string().required('O semestre da turma é obrigatório!'),
    ativo: yup.string().required('Esse campo é obrigatório!'),

    //refs

    curso: yup.string()
                .required('O curso é obrigatório!')
                .test(
                    'idValidator',
                    'ID do curso é inválido',
                    value => mongoose.Types.ObjectId.isValid(value)
                ),
    professor: yup.string()
                .required('O professor é obrigatório!')
                .test(
                    'idValidator',
                    'ID do responsável inválido',
                    value => mongoose.Types.ObjectId.isValid(value)
                    ),
})

async function validarTurma(req, res, next) {
  try {
    await turmaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const turmaAtualizarSchema = yup.object().shape({

    nome: yup.string().required('O nome da turma é obrigatório!'),
    anoLetivo: yup.number().required('O ano letivo é obrigatório!'),
    semestre: yup.string().required('O semestre da turma é obrigatório!'),
    ativo: yup.string().required('Esse campo é obrigatório!'),

    
    curso: yup.string()
        .nullable()
        .test(
          'idValidator',
          'ID do curso é inválido',
          value => mongoose.Types.ObjectId.isValid(value)
        ),
    professor: yup.string()
        .nullable()
        .test(
          'idValidator',
          'ID do professor é inválido',
          value => mongoose.Types.ObjectId.isValid(value)
        ),
    });

async function validarTurmaAtualizacao(req, res, next) {
  try {
    await turmaAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarTurma, validarTurmaAtualizacao };   