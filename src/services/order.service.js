const OrderRepo=require('../repository/order.repository.js')

class OrderService{
    async addOrder(orderData){
        return await OrderRepo.addOrder(orderData)
    }

    async getOrder(){
        return await OrderRepo.getOrder()
    }

    async getOrderbyId(orderId){
        return await OrderRepo.getOrderById(orderId)
    }

    async updateOrderStus(orderId,updatedStatus){
        return await OrderRepo.updateOrderStatus(orderId,updatedStatus)
    }

    async deleteOrder(orderId){
        return await OrderRepo.deleteOrder(orderId)
    }
}

module.exports=new OrderService()