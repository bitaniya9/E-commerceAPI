const express=require('express')

const connectDB=require('./config/database.js')
require('dotenv').config()

const ProductRoutes=require('./routes/product.routes.js')

const app=express()

app.use(express.json())

app.use('/api',ProductRoutes)

connectDB()