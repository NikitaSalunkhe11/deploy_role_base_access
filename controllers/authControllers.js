
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const register = async (req, res)=>{
    try {
        const {firstName, lastName, userName, email, password, role, age} = req.body;

        const userdata = await User.findOne({email});

        if(userdata){
            return res.status(409).send({message:"User already registered"});
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            userName,
            email,
            password: hashPassword,
            role,
            age,
        });

        await newUser.save();

        res.status(200).send({message:"User successfully registered", newUser});

    } catch (error) {
        console.log("Error in getEmployee controller ", error);
        res.status(500).send({error:"Internal server error", error});
    }
}

const login = async (req, res)=>{
    try {
        const {email, password} = req.body;

        const userdata = await User.findOne({email});
        
        if(!userdata){
            return res.status(404).send({message:"User not found"});
        }

        const ismatch = await bcrypt.compare(password, userdata.password);

        if(!ismatch){
            return res.status(402).send({message:"password is incorrect"});
        }

        const role = userdata.role;

        //generate token
        const token = jwt.sign(
            {email, password, role},//payload
            process.env.SECRET_KEY,//secret key
            {
                expiresIn:'1h'//expire time
            }
        );

        res.status(200).send({message:"User login Successfully",userdata, token})

    } catch (error) {
        
    }
}
module.exports = {register, login};