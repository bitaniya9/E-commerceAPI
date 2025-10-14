const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    name:{type:String,required:true},
    productId:{type:mongoose.Schema.Types.ObjectId,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:false},
    inStock:{type:boolean,required:true}
    
})

module.exports=mongoose.model("Product",ProductSchema)