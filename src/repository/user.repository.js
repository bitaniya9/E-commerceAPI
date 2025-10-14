
const User=require('../models/user.schema.js')

class UserRepo{
    async createUser(userData){
        return await User.create(userData)
    }
    async getUsers(){
        return await User.find()
    }
    async getUserById(userId){
        return await User.findById(userId)
    }
    async updateUser(userId,updatedData){
        return await User.findByIdAndUpdate(userId,updatedData)
    }
    async deleteUser(userId){
        return await User.findByIdAndDelete(userId)
    }

}
module.exports=new UserRepo()