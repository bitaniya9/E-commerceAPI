const express=require('express')

const UserController=require('../controllers/user.contollers.js')

const router=express.Router()

router.post('/v1/Users',(req,res)=>UserController.addUser(req,res))

router.get('/v1/Users',(req,res)=>UserController.getUsers(req,res))

router.get('/v1/Users/:id',(req,res)=>UserController.getUserById(req,res))

router.put('/v1/Users/:id',(req,res)=>UserController.updateUser(req,res))

router.delete('/v1/Users/:id',(req,res)=>UserController.deleteUser(req,res))

module.exports=router