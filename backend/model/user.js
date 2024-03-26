import mongoose, { Schema } from "mongoose";


const userModel =new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    emailVerified:{
        type: Boolean,
        required:true
    },
    balance:{
        type: Number,
    }
})

export const User = mongoose.connect('User', userModel)