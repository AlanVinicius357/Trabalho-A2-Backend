const express = require('express');
const router = express.Router();

const cursoModel = require('../models/cursoModel');
const { validarCurso, validarAtualizacaoCurso } = require('../validators/cursoValidators');
const { validarId } = require('../validators/IDValidator');

router.get('/cursos', async (req, res) => {
  const cursos = await cursoModel.find().populate('departamento');
  res.json(cursos);
});

router.get('/cursos/:id', validarId, async (req, res) => {
  const curso = await cursoModel.findById(req.params.id).populate('departamento');
  if (!curso) {
    return res.status(404).json({ error: 'Curso não encontrado' });
  }
  res.json(curso);
});

router.post('/cursos', validarCurso, async (req, res) => {
  const novoCurso = await cursoModel.create(req.body);
  res.status(201).json(novoCurso);
});

router.put('/cursos/:id', validarId, validarAtualizacaoCurso, async (req, res) => {
  const cursoAtualizado = await cursoModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!cursoAtualizado) {
    return res.status(404).json({ error: 'Curso não encontrado' });
  }

  res.json(cursoAtualizado);
});

router.delete('/cursos/:id', validarId, async (req, res) => {
  const cursoDeletado = await cursoModel.findByIdAndDelete(req.params.id);
  if (!cursoDeletado) {
    return res.status(404).json({ error: 'Curso não encontrado' });
  }
  res.status(204).send();
});

module.exports = router;
