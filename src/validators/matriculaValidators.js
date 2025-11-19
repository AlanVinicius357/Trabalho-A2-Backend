const { default: mongoose } = require('mongoose');
const yup = require('yup');

// Validação para criar matrícula
const matriculaSchema = yup.object().shape({

aluno: yup.string()
.required('O aluno é obrigatório!')
.test('idValidator', 'ID de aluno é inválido',
value => mongoose.Types.ObjectId.isValid(value)
),

turma: yup.string()
.required('A turma é obrigatória!')
.test('idValidator', 'ID de turma é inválido',
value => mongoose.Types.ObjectId.isValid(value)
),

status: yup.string()
.required('O status é obrigatório!')
.oneOf(['ativa', 'trancada', 'cancelada'], 'Status inválido'),
});

async function validarMatricula(req, res, next) {
try {
await matriculaSchema.validate(req.body, { abortEarly: false });
next();
} catch (error) {
res.status(400).json({ error: error.errors });
}
}

// Validação para atualizar matrícula
const matriculaSchemaAtualizacao = yup.object().shape({

aluno: yup.string()
.nullable()
.test('idValidator', 'ID de aluno é inválido',
value => !value || mongoose.Types.ObjectId.isValid(value)
),

turma: yup.string()
.nullable()
.test('idValidator', 'ID de turma é inválido',
value => !value || mongoose.Types.ObjectId.isValid(value)
),

status: yup.string()
.nullable()
.oneOf(['ativa', 'trancada', 'cancelada'], 'Status inválido'),
});

async function validarAtualizacaoMatricula(req, res, next) {
try {
await matriculaSchemaAtualizacao.validate(req.body, { abortEarly: false });
next();
} catch (error) {
res.status(400).json({ error: error.errors });
}
}

module.exports = {
validarMatricula,
validarAtualizacaoMatricula,
};
