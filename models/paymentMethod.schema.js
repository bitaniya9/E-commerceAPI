const mongoose=require("mongoose")

const PaymentMethodSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    paymentProvider:{type:String,required:true},  //Paypal
    paymentType:{type:String,required:true}

})

module.exports=("PaymentMethod",PaymentMethodSchema)
