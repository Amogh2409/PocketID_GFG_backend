const UserModel = require('../models/userModels');
const jwt = require('jsonwebtoken');

class UserServices {
    static async registerUser(email, password){
        try{
            console.log("Email: ", email, "Password:", password);
            const createuser = new UserModel({email, password});
            return await createuser.save();
        }
        catch(err){
            console.log(err);
        }
    }

    static async getUserByEmail(email){
        try{
            return await UserModel.findOne({email});
        }
        catch(err){
            console.log(err);
        }
    }

    static async checkUser(email){
        try{
            return await UserModel.findOne({email});
        }
        catch(err){
            console.log(err);
        }
    }

    static async generateToken(tokenData, JWTSecret_key, expiryTime){
        try{
            return jwt.sign(tokenData, JWTSecret_key, {expiresIn: expiryTime});
        }
        catch(err){
            console.log(err);
        }
    }
}
module.exports = UserServices;