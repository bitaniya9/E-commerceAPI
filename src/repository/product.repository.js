const Product=require('../models/product.schema.js')

class ProductRepo{
    //attributes 
    //methods

    //CRUD
    //Create
    async addProduct(productData){
        return await Product.create(productData); 
    }
    //read
    async getProduct(){
        return await Product.find();
    }
    async getProductbyId(productId){
        return await Product.findbyId(productId);
    }
    //update
    async updateProduct(productId,updateData){
        return await Product.findByIdAndUpdate(productId,updateData,{new:true})

    }
    //delete
    async deleteProduct(productId){
        return await Product.findByIdAndDelete(productId);
    }
}

module.exports=new ProductRepo();