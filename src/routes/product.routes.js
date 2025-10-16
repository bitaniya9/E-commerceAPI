const express=require('express')

const router=express.Router();

const productControllers = require('../controllers/product.controllers');

router.post('/v1/Products',(req,res)=>productControllers.addProduct(req,res))
router.put('/v1/Products/:id',(req,res)=>productControllers.updateProduct(req,res))
router.get('/v1/Products',(req,res)=>productControllers.getProducts(req,res))
router.get('/v1/Products/:id',(req,res)=>productControllers.getProductbyId(req,res))
router.delete('/v1/Products/:id',(req,res)=>productControllers.deleteProduct(req,res))

module.exports=router
