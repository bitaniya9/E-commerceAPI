const ProductRepo=require('../repository/product.repository.js');

class ProductService{
    //methods

    async addProduct(productData){
        return await ProductRepo.addProduct(productData);

    }
    async getProducts(){
        return await ProductRepo.getProduct();
    }
    async getProductbyId(productId){
        return await ProductRepo.getProductbyId(productId);

    }
    async updateProduct(productId,updatedData){
        return await ProductRepo.updateProduct(productId,updatedData)
    }

    async deleteProduct(productId){
        return await ProductRepo.deleteProduct(productId);
    }

}

module.exports=new ProductService();