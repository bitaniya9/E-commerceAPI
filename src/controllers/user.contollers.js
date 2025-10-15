const UserService=require('../services/user.service.js')

class UserController{
    async addUser(req,res){
        try{
            const newUser=await UserService.addUser(req.body);
            res.status(201).json(newUser);

        }catch(error){
            res.status(400).json({message:error.message})
        }
    }

    async getUsers(req,res){
        try{
            const allUsers=await UserService.getUsers()
            res.status(200).json(allUsers);
        }
        catch(error){
            res.status(500).json({message:error.message})

        }
    }
    async getUserById(req,res){
        try{
            const oneUser=await UserService.getUserById(req.params.id);
            if(!oneUser){
                return res.status(404).json({message:"User not found"})
            }
            res.status(200).json(oneUser);

        }catch(error){
            res.status(500).json({message:error.message});
        }
    }

    async updateUser(req,res){
        try{
            const updatedUser=await UserService.updateUser(req.params.id,req.body);

            if(!updatedUser){
               return res.status(404).json({message:"User not found"})
            }
            res.status(200).json(updatedUser);
        }catch(error){
            res.status(500).json({message:error.message});
        }
    }

    async deleteUser(req,res){
        try{
            const userToBdeleted=await UserService.deleteUser(req.params.id);

            if(!userToBdeleted){
                return res.status(404).json({message:"User not found"})
            }
            res.status(200).json({message:"User deleted successfully"})

        }catch(error){
            res.status(500).json({message:error.message});
        }
    }

}
module.exports=new UserController()