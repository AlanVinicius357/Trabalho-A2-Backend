const express = require('express');
const router = express.Router();

const professorModel = require('../models/professorModel');
const { validarProfessor, validarAtualizacaoProfessor } = require('../validators/professorValidators');
const { validarId } = require('../validators/IDValidator');

router.get('/professores', async (req, res) => {
  const professor = await professorModel.find().populate(['departamento']);
  res.json(professor);
});

router.get('/professores/:id', validarId, async (req, res) => {
  const professor = await professorModel.findById(req.params.id).populate(['departamento']);
  if (!professor) {
    return res.status(404).json({ error: 'Professor não encontrado' });
  }
  res.json(professor);
});

router.post('/professores', validarProfessor, async (req, res) => {
  const novoProfessor = await professorModel.create(req.body);
  res.status(201).json(novoProfessor);
});

router.put('/professores/:id', validarId, validarAtualizacaoProfessor, async (req, res) => {
  const professorAtualizado = await professorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!professorAtualizado) {
    return res.status(404).json({ error: 'Professor não encontrado' });
  }
  res.json(professorAtualizado);
});

router.delete('/professores/:id', validarId, async (req, res) => {
  const professorDelatado = await professorModel.findByIdAndDelete(req.params.id);
  if (!professorDelatado) {
    return res.status(404).json({ error: 'Professor não encontrado' });
  }
  res.status(204).send();
});

module.exports = router;