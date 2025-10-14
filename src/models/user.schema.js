const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,required:true},
    paymentMethod:{type:mongoose.Schema.Types.ObjectId,ref:'PaymentMethod'},
    address:{type:String,required:true}
})

module.exports=mongoose.model("User",UserSchema)
//Payment method biling, provider data, card references