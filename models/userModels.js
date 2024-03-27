const db = require('./database/db');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const { Schema } = mongoose;  // Destructuring assignment

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'is invalid'],
    },

    password:{
        type: String,
        required: true,
        minlength: 6,
    }
    
}, {timestamps: true});


UserSchema.pre('save', async function(){
    var user = this;
    if(!user.isModified('password')){
        return 
    }
    try{
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(user.password, salt);

        user.password = hash;
    }
    catch(err){
        console.log(err);
    }
});

UserSchema.methods.comparePasword = async function(password){
    try{
        console.log("Password: ", password);
        const isValid = await bcrypt.compareSync(password, this.password);
        return isValid;
    }
    catch(err){
        console.log(err);
    }
}

const UserModel = db.moddel('User', UserSchema);
module.exports = UserModel;