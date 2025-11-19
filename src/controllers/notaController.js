const express = require('express');
const router = express.Router();

const NotaModel = require('../models/notaModel');
const { validarNota, validarNotaAtualizacao } = require('../validators/notaValidators');
const { validarId } = require('../validators/IDValidator');

// GET - Listar todas as notas
router.get('/notas', async (req, res) => {
  const notas = await NotaModel.find()
    .populate(['aluno', 'disciplina']);
  res.json(notas);
});

// GET - Buscar nota por ID
router.get('/notas/:id', validarId, async (req, res) => {
  const nota = await NotaModel.findById(req.params.id)
    .populate(['aluno', 'disciplina']);

  if (!nota) {
    return res.status(404).json({ error: 'Nota não encontrada' });
  }

  res.json(nota);
});

// POST - Criar nova nota
router.post('/notas', validarNota, async (req, res) => {
  const novaNota = await NotaModel.create(req.body);
  res.status(201).json(novaNota);
});

// PUT - Atualizar nota
router.put('/notas/:id', validarId, validarNotaAtualizacao, async (req, res) => {
  const notaAtualizada = await NotaModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!notaAtualizada) {
    return res.status(404).json({ error: 'Nota não encontrada' });
  }

  res.json(notaAtualizada);
});

// DELETE - Remover nota
router.delete('/notas/:id', validarId, async (req, res) => {
  const notaDeletada = await NotaModel.findByIdAndDelete(req.params.id);

  if (!notaDeletada) {
    return res.status(404).json({ error: 'Nota não encontrada' });
  }

  res.status(204).send();
});

module.exports = router;
