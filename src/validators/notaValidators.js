const { default: mongoose } = require("mongoose");
const yup = require("yup");

const notaSchema = yup.object().shape({
  nota01: yup.number().required("A nota 01 é obrigatótia"),
  nota02: yup.number().required("A nota 02 é obrigatótia"),
  notaFinal: yup.number().required("A nota final é obrigatótia"),
  aluno: yup
    .string().required("O aluno é obrigatório")
    .test("idValidator", "ID de aluno inválido", (value) =>
      mongoose.Types.ObjectId.isValid(value)
    ),
  diciplina: yup
    .string().required("A disciplina é obrigatório")
    .test("idValidator", "ID de disciplina inválido", (value) =>
      mongoose.Types.ObjectId.isValid(value)
    ),
  turma: yup
    .string().required("A turma é obrigatório")
    .test("idValidator", "ID de turma inválido", (value) =>
      mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarNota(req, res, next) {
  try {
    await notaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

const notaSchemaAtualizacao = yup.object().shape({
  nota01: yup.number(),
  nota02: yup.number(),
  notaFinal: yup.number(),
  aluno: yup
    .string()
    .nullable()
    .test("idValidator", "ID de aluno inválido", (value) =>
      mongoose.Types.ObjectId.isValid(value)
    ),
  diciplina: yup
    .string()
    .nullable()
    .test("idValidator", "ID de disciplina inválido", (value) =>
      mongoose.Types.ObjectId.isValid(value)
    ),
  turma: yup
    .string()
    .nullable()
    .test("idValidator", "ID de turma inválido", (value) =>
      mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarNotaAtualizacao(req, res, next) {
  try {
    await notaSchemaAtualizacao.validate(req.body, {
      abortEarly: false,
    });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

module.exports = {
  validarNota,
  validarNotaAtualizacao,
};
