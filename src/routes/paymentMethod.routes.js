const express=require('express')

const PayMethodController=require('../controllers/paymentMethod.controllers.js');

const router=express.Router();

router.post('/v1/PaymentMethod',(req,res)=>PayMethodController.addPayMethod(req,res))

router.get('/v1/PaymentMethod/:id',(req,res)=>PayMethodController.getPayMethodByUserId(req,res))

router.put('/v1/PaymentMethod/:id',(req,res)=>PayMethodController.updatePayMethod(req,res))

router.delete('/v1/PaymentMethod/:id',(req,res)=>PayMethodController.deletePayMethod(req,res))

module.exports=router

