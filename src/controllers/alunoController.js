const express = require('express');
const router = express.Router();

const alunoModel = require('../models/alunoModel');
const { validarAluno, validarAtualizacaoAluno } = require('../validators/alunoValidators');
const { validarId } = require('../validators/IDValidator');

router.get('/alunos', async (req, res) => {
  const aluno = await alunoModel.find().populate(['matricula']);
  res.json(aluno);
});

router.get('/alunos/:id', validarId, async (req, res) => {
  const aluno = await alunoModel.findById(req.params.id).populate(['matricula']);
  if (!aluno) {
    return res.status(404).json({ error: 'Aluno não encontrado' });
  }
  res.json(aluno);
});

router.post('/alunos', validarAluno, async (req, res) => {
  const novoAluno = await alunoModel.create(req.body);
  res.status(201).json(novoAluno);
});

router.put('/alunos/:id', validarId, validarAtualizacaoAluno, async (req, res) => {
  const alunoAtualizado = await alunoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!alunoAtualizado) {
    return res.status(404).json({ error: 'Aluno não encontrado' });
  }
  res.json(alunoAtualizado);
});

router.delete('/alunos/:id', validarId, async (req, res) => {
  const alunoDelatado = await alunoModel.findByIdAndDelete(req.params.id);
  if (!alunoDelatado) {
    return res.status(404).json({ error: 'Aluno não encontrado' });
  }
  res.status(204).send();
});

module.exports = router;