const mongoose = require('mongoose')
const config = require('config')
const Joi = require('joi')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },

    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
})

userSchema.methods.generateAuthToken = function(){
    const token =  jwt.sign({ _id: this._id} , config.get("jwtPrivateKey"))
    return token
}

const Users = mongoose.model('users',userSchema);

function validateUser(User){
    const Schema=Joi.object({
        name : Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).email().required(),
        password: Joi.string().min(4).max(1024).required()
    })
    return Schema.validate(User);
}

exports.User = Users;
exports.validate = validateUser;