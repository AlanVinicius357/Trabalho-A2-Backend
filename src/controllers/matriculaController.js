const express = require('express');
const router = express.Router();

const matriculaModel = require('../models/matriculaModel');
const { validarMatricula } = require('../validators/matriculaValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/matriculas', async (req, res) => {
  try {
    const matriculas = await matriculaModel
      .find()
      .populate(['aluno', 'turma']);

    res.json(matriculas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/matriculas/:id', validarId, async (req, res) => {
  try {
    const matricula = await matriculaModel
      .findById(req.params.id)
      .populate(['aluno', 'turma']);

    if (!matricula) {
      return res.status(404).json({ error: 'Matrícula não encontrada' });
    }

    res.json(matricula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/matriculas', validarMatricula, async (req, res) => {
  try {
    const novaMatricula = await matriculaModel.create(req.body);
    res.status(201).json(novaMatricula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/matriculas/:id', validarId, validarMatricula, async (req, res) => {
  try {
    const matriculaAtualizada = await matriculaModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!matriculaAtualizada) {
      return res.status(404).json({ error: 'Matrícula não encontrada' });
    }

    res.json(matriculaAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/matriculas/:id', validarId, async (req, res) => {
  try {
    const matriculaDeletada = await matriculaModel.findByIdAndDelete(
      req.params.id
    );

    if (!matriculaDeletada) {
      return res.status(404).json({ error: 'Matrícula não encontrada' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
