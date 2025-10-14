const UserRepo=require('../repository/user.repository.js')

class UserService{
    async addUser(userData){
        return await UserRepo.createUser(userData)
    }
    async getUser(){
        return await UserRepo.getUsers()
    }
    async getUserById(userId){
        return await UserRepo.getUserById(userId)
    }
    async updateUser(userId,updatedData){
        return await UserRepo.updateUser(userId,updatedData)
    }
    async deleteUser(userId){
        return await UserRepo.deleteUser(userId)
    }

}
module.exports=new UserService()