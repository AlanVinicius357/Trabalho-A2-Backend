const express = require('express');
const router = express.Router();

const UsuarioModel = require('../models/usuarioModel');
const { validarUsuario, validarAtualizacaoUsuario } = require('../validators/usuarioValidators');
const { validarId } = require('../validators/IDValidator');

// GET - Listar todos os usuários
router.get('/usuarios', async (req, res) => {
  const usuarios = await UsuarioModel.find()
    .populate(['aluno', 'professor']);
  res.json(usuarios);
});

// GET - Buscar usuário por ID
router.get('/usuarios/:id', validarId, async (req, res) => {
  const usuario = await UsuarioModel.findById(req.params.id).populate(['aluno', 'professor']);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  res.json(usuario);
});

// POST - Criar novo usuário
router.post('/usuarios', validarUsuario, async (req, res) => {
  const novoUsuario = await UsuarioModel.create(req.body);
  res.status(201).json(novoUsuario);
});

// PUT - Atualizar usuário
router.put('/usuarios/:id', validarId, validarAtualizacaoUsuario, async (req, res) => {
  const usuarioAtualizado = await UsuarioModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!usuarioAtualizado) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  res.json(usuarioAtualizado);
});

// DELETE - Remover usuário
router.delete('/usuarios/:id', validarId, async (req, res) => {
  const usuarioDeletado = await UsuarioModel.findByIdAndDelete(req.params.id);
  if (!usuarioDeletado) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  res.status(204).send();
});

module.exports = router;
