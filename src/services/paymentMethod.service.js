const PaymentMethodRepo=require('../repository/paymentMethod.repository.js')

class PayMethodService{

    async addPayMethod(payMethodData){
        return await PaymentMethodRepo.addPayMethod(payMethodData)

    }
    async getPayMethod(userId){
        return await PaymentMethodRepo.getPayMethod(userId)
    }
    async updatePayMethod(userId,payMethod){
        return await PaymentMethodRepo.updatePayMethod(userId,payMethod)
    }

    async deletePayMethod(userId){
        return await PaymentMethodRepo.deletePayMethod(userId)

    }


}
module.exports=new PayMethodService()