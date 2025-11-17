const express = require('express');
const router = express.Router();

const turmaModel = require('../models/turmaModel');
const { validarId } = require('../validators/IDValidator');
const { validarTurma, validarTurmaAtualizacao } = require('../validators/turmaValidators');

router.get('/turmas', async (req, res) => {
  const turma = await turmaModel.find().populate(['curso', 'professor']);
  res.json(turma);
});

router.get('/turmas/:id', validarId, async (req, res) => {
  const turma = await turmaModel.findById(req.params.id).populate(['curso', 'professor']);
  if (!turma) {
    return res.status(404).json({ error: 'Turma não encontrada' });
  }
  res.json(turma);
});

router.post('/turmas', validarTurma, async (req, res) => {
  const novaTurma = await turmaModel.create(req.body);
  res.status(201).json(novaTurma);
});

router.put('/turmas/:id', validarId, validarTurmaAtualizacao, async (req, res) => {
  const turmaAtualizada = await turmaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!turmaAtualizada) {
    return res.status(404).json({ error: 'Turma não encontrada' });
  }
  res.json(turmaAtualizada);
});

router.delete('/turmas/:id', validarId, async (req, res) => {
  const turmaDeletada = await turmaModel.findByIdAndDelete(req.params.id);
  if (!turmaDeletada) {
    return res.status(404).json({ error: 'Turma não encontrada' });
  }
  res.status(204).send();
});

module.exports = router;