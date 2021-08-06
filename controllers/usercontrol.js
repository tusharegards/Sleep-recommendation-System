const bcrypt = require('bcrypt')
const {User, validate} = require('../models/usermodel')
const _ = require('lodash')

const createUser = async(req,res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let user = await User.findOne({email: req.body.email})
    if(user) return res.status(400).send("user already registered")

    user = req.body    
    const newUser = new User(user);

    try{
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt)
        await newUser.save();
        //recieve token from user now present in db
        const token = newUser.generateAuthToken();

        res.header('x-auth-token', token).send(_.pick(newUser,['id','name','email']));
        console.log("user added success")
    }
    catch(err){
        res.status(409).send({message:err.message})
    }
}

module.exports = createUser;