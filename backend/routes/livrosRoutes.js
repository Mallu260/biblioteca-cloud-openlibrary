const express = require('express');

const router = express.Router();

const livrosController = require('../controllers/livrosController');

router.get('/pesquisa', livrosController.pesquisarLivros);

module.exports = router;
