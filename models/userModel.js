const mongoose  = require("mongoose");

const userSchema = mongoose.Schema({
    firstName :{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["Employee","HR","Admin"],
        default:"Employee",
        required:true
    },
    age:{
        type:Number,
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;