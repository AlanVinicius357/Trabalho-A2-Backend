const express = require('express');
const router = express.Router();

const Frequencia = require('../models/frequenciaModel');
const { create: validarFrequencia, update: validarAtualizacaoFrequencia } = require('../validators/frequenciaValidators');
const { validarId } = require('../validators/IDValidator');

// GET todas as frequências
router.get('/frequencias', async (req, res) => {
  const frequencias = await Frequencia.find()
    .populate(['alunoId', 'disciplinaId']);

  res.json(frequencias);
});

// GET frequência por ID
router.get('/frequencias/:id', validarId, async (req, res) => {
  const frequencia = await Frequencia.findById(req.params.id)
    .populate(['alunoId', 'disciplinaId']);

  if (!frequencia) {
    return res.status(404).json({ error: 'Frequência não encontrada' });
  }
  res.json(frequencia);
});

// POST registrar frequência
router.post('/frequencias', async (req, res) => {
  const { error } = validarFrequencia.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const novaFrequencia = await Frequencia.create(req.body);
  res.status(201).json(novaFrequencia);
});

// PUT atualizar frequência
router.put('/frequencias/:id', validarId, async (req, res) => {
  const { error } = validarAtualizacaoFrequencia.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const frequenciaAtualizada = await Frequencia.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!frequenciaAtualizada) {
    return res.status(404).json({ error: 'Frequência não encontrada' });
  }

  res.json(frequenciaAtualizada);
});

// DELETE remover frequência
router.delete('/frequencias/:id', validarId, async (req, res) => {
  const frequenciaDeletada = await Frequencia.findByIdAndDelete(req.params.id);

  if (!frequenciaDeletada) {
    return res.status(404).json({ error: 'Frequência não encontrada' });
  }

  res.status(204).send();
});

module.exports = router;
