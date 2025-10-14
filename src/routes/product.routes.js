const express=require('express')

const router=express.Router();

const productControllers = require('../controllers/product.controllers');

router.post('/v1/products/:id',productControllers.addProduct)
router.put('/v1/products',productControllers.updateProduct)
router.get('/v1/products',productControllers.getProducts)
router.get('/v1/products/:id', productControllers.getProductbyId)
