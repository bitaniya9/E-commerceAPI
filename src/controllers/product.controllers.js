const ProductService=require('../services/product.services')

class ProductController{
    async addProduct(req,res){
        try{
            const newProduct=await ProductService.addProduct(req.body)
            res.status(201).json(newProduct);
        
        }catch(error){
            res.status(400).json({message:error.message})
        }
    }
    async getProducts(req,res){
        try{
            const products=await ProductService.getProduct();
            res.status(200).json(products);

        }catch(error){
            res.status(500).json({message:error.message})

        }
    }

    async getProductbyId(req,res){
        try{
            const oneProduct=await ProductService.getProductbyId(req.params.id);
            if(!oneProduct){
                return res.status(404).json({message:"Product not found"})
            }
            res.status(200).json(oneProduct);

        }catch(error){
            res.status(500).json({message:error.message})

        }
            
    }
    async updateProduct(req,res){
        try{
            const updatedProduct=await ProductService.updateProduct(req.params.id,req.body)
            if(!updatedProduct){
                return res.status(404).json({message:"Product not found"})
            }
            res.status(200).json(updatedProduct);

        }catch(error){
            res.status(500).json({message:error.message})
        }      
    }

    async deleteProduct(req,res){
        try{
            const deletedProduct=await ProductService.deleteProduct(req.params.id);
            if(!deletedProduct){
                return res.status(404).json({message:"Product not found"})
            }
            res.status(200).json({message:"Product Successfully deleted"})
        }
        catch(error){
            res.status(500).json({message:error.message})

        }
    }

    



}

module.exports=new ProductController