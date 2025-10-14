const PaymentMethod=require('../models/paymentMethod.schema.js')

class PaymentMethodRepo{
    async addPayMethod(payMethodData){
        return await PaymentMethod.create(payMethodData)
    }

    async getPayMethod(userId){
        return await PaymentMethod.findById(userId)
    }

    async updatePayMethod(userId,payMethod){
        return await PaymentMethod.findByIdAndUpdate(userId,payMethod)
    }

    async deletePayMethod(userId){
        return await PaymentMethod.findByIdAndDelete(userId)
    }

}

module.exports=new PaymentMethodRepo()