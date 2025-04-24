const express = require("express");
const { getProducts, getProduct, createProduct, updatedProduct, deleteProduct } = require('../controllers/products.controllers')
const router = express.Router();


router.get('/', getProducts);
router.get('/:id', getProduct);

router.post('/', createProduct);
router.put('/:id', updatedProduct);
router.delete('/:id', deleteProduct);

module.exports = router;