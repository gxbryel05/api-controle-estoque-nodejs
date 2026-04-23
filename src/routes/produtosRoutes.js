const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');

router.post('/produtos', controller.criarProduto);
router.get('/produtos', controller.listarProdutos);
router.put('/produtos/:id', controller.atualizarProduto);
router.delete('/produtos/:id', controller.deletarProduto);

module.exports = router;