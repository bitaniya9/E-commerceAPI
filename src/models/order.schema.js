const mongoose=require('mongoose')

const OrderSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    status:{type:String,enum:["pending","delivered","canceled"],default:"pending",required:true},
    productOrders:[{
        productId:{type:mongoose.Schema.Types.ObjectId,ref:"Product",required:true},
        quantity:{type:Number,required:true},
    }],
    orderId:{type:mongoose.Schema.Types.ObjectId,required:true}
        
},{timestamps:true});
    //put timestamp in schema level
    
module.exports=mongoose.model("Orders",OrderSchema)