const OrderService=require('../services/order.service.js')

class OrderController{
    async addOrder(req,res){
        try{
            const newOrder=await OrderService.addOrder(req.body);
            res.status(201).json(newOrder);

        }catch(error){
            res.status(400).json({message:error.message})

        }
    }

    async getOrders(req,res){
        try{
            const orders=await OrderService.getOrders();
            res.status(200).json(orders);

        }catch(error){
            res.status(500).json({message:error.message})
        }
    }
    async getOrderbyId(req,res){
        try{
            const order=await OrderService.getOrderbyId(req.params.id);
            if(!order){
               return res.status(404).json({message:"Order not found"})
            }
            res.status(200).json(order);

        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

    async updateOrderStus(req,res){
        try{
            const newStatus=await OrderService.updateOrderStus(req.params.id,req.body);
            if(!newStatus){
                return res.status(404).json({message:"Order not found"})
            }
            res.status(200).json(newStatus);

        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

    async deleteOrder(req,res){
        try{
            const deletedOrder=await OrderService.updateOrderStus(req.params.id);
            if(!deletedOrder){
                return res.status(404).json({message:"Order not found"})
            }
            res.status(200).json({message:"Order deleted successfully"})

        }catch(error){
            res.status(500).json({message:error.message})
        }
    
    }

}

module.exports=new OrderController()