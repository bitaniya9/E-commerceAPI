const express=require('express')

const OrderController=require('../controllers/order.controllers.js')

const router=express.Router();

router.post('/v1/orders',OrderController.addOrder);

router.get('/v1/orders',OrderController.getOrders);

router.get('/v1/orders/:id',OrderController.getOrderbyId);

router.put('/v1/orders/:id',OrderController.updateOrderStus);

router.delete('/v1/orders/:id',OrderController.deleteOrder)

module.exports=router
