const Order= require('../models/order.schema.js')

class OrderRepo{
    async addOrder(orderData){
        return await Order.create(orderData);
    }
    async getOrder(){
        return await Order.find();
    }
    async getOrderById(orderId){
        return await Order.findById(orderId)
    }
    async updateOrderStatus(orderId,updatedStatus){
        return await Order.findByIdAndUpdate(orderId,updatedStatus)

    }
    async deleteOrder(orderId){
        return await Order.findByIdAndDelete(orderId)
    }
}
module.exports=new OrderRepo()