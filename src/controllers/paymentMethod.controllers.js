const PayMethodService=require('../services/paymentMethod.service.js')

class PayMethodController{

    async addPayMethod(req,res){
        try{
            const newPayMethod=await PayMethodService.addPayMethod(req.body);
            res.status(201).json(newPayMethod)
        }
        catch(error){
            res.status(400).json({message:error.message})

        }
    }

    async getPayMethodByUserId(req,res){
        try{
            const payMethod=await PayMethodService.getPayMethodByUserId(req.params.userId);
            if(!payMethod){
               return res.status(404).json({message:"Payment method not found"}) //using userId
            }
            res.status(200).json(payMethod);

        }catch(error){
            res.status(500).json({message:error.message})

        }
    }
    async updatePayMethod(req,res){
        try{
            const updatedPayMethod=await PayMethodService.updatePayMethod(req.params.id,req.body);
            if(!updatedPayMethod){
               return res.status(404).json({message:"Payment method not found"})
            }
            res.status(200).json(updatedPayMethod);

        }catch(error){
            res.status(500).json({message:error.message})
        }
    }
    async deletePayMethod(req,res){
        try{
            const deletedPayMethod=await PayMethodService.deletePayMethod(req.params.id);

            if(!deletedPayMethod){
               return res.status(404).json({message:"Payment method not found"})
            }

            res.status(200).json({message:"Payment method Successfully deleted"});
        }catch(error){
            res.status(500).json({message:error.message})
        }

    }

}
module.exports=new PayMethodController();