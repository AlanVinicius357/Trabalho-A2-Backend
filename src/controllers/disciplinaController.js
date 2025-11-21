const express = require('express');
const router = express.Router();

const Disciplina = require('../models/disciplinaModel');
const { create: validarDisciplina, update: validarAtualizacaoDisciplina } = require('../validators/disciplinaValidators');
const { validarId } = require('../validators/IDValidator');

// GET todas as disciplinas
router.get('/disciplinas', async (req, res) => {
  const disciplinas = await Disciplina.find().populate(['professorId']);
  res.json(disciplinas);
});

// GET disciplina por ID
router.get('/disciplinas/:id', validarId, async (req, res) => {
  const disciplina = await Disciplina.findById(req.params.id).populate(['professorId']);
  if (!disciplina) {
    return res.status(404).json({ error: 'Disciplina não encontrada' });
  }
  res.json(disciplina);
});

// POST criar disciplina
router.post('/disciplinas', async (req, res) => {
  const { error } = validarDisciplina.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const novaDisciplina = await Disciplina.create(req.body);
  res.status(201).json(novaDisciplina);
});

// PUT atualizar disciplina
router.put('/disciplinas/:id', validarId, async (req, res) => {
  const { error } = validarAtualizacaoDisciplina.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const disciplinaAtualizada = await Disciplina.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!disciplinaAtualizada) {
    return res.status(404).json({ error: 'Disciplina não encontrada' });
  }

  res.json(disciplinaAtualizada);
});

// DELETE remover disciplina
router.delete('/disciplinas/:id', validarId, async (req, res) => {
  const disciplinaDeletada = await Disciplina.findByIdAndDelete(req.params.id);
  if (!disciplinaDeletada) {
    return res.status(404).json({ error: 'Disciplina não encontrada' });
  }

  res.status(204).send();
});

module.exports = router;
