const express = require('express');
const router = express.Router();

const DepartamentoModel = require('../models/DepartamentoModel');
const { validarDepartamento, validarAtualizacaoDepartamento } = require('../validators/departamentoValidators');
const { validarId } = require('../validators/IDValidator');

router.get('/departamentos', async (req, res) => {
  const departamentos = await DepartamentoModel.find();
  res.json(departamentos);
});

router.get('/departamentos/:id', validarId, async (req, res) => {
  const departamento = await DepartamentoModel.findById(req.params.id);
  if (!departamento) {
    return res.status(404).json({ error: 'Departamento não encontrado' });
  }
  res.json(departamento);
});

router.post('/departamentos', validarDepartamento, async (req, res) => {
  const novoDepartamento = await DepartamentoModel.create(req.body);
  res.status(201).json(novoDepartamento);
});

router.put('/departamentos/:id', validarId, validarAtualizacaoDepartamento, async (req, res) => {
  const departamentoAtualizado = await DepartamentoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!departamentoAtualizado) {
    return res.status(404).json({ error: 'Departamento não encontrado' });
  }
  res.json(departamentoAtualizado);
});

router.delete('/departamentos/:id', validarId, async (req, res) => {
  const deletado = await DepartamentoModel.findByIdAndDelete(req.params.id);
  if (!deletado) {
    return res.status(404).json({ error: 'Departamento não encontrado' });
  }
  res.status(204).send();
});

module.exports = router;
