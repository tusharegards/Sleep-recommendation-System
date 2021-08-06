const bcrypt = require('bcrypt')
const Joi = require('joi')
const {User} = require('../models/usermodel')

const _ = require('lodash')

const authenticate = async(req,res) =>{
    const {error} = validateUser(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send("invalid email or password")
    
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send("invalid email or password")

    //recieving token from user model with user id
    const token = user.generateAuthToken();
    res.send({email:user.email , token:token})
}

function validateUser(req){
    const Schema=Joi.object({
        email: Joi.string().min(5).max(255).email().required(),
        password: Joi.string().min(4).max(1024).required()
    })
    return Schema.validate(req);
}


module.exports = authenticate