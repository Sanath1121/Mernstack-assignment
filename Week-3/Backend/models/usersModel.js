import exp from "express";
import {Schema,model} from 'mongoose'

//create user schema (username,password,name)
const userSchema=new Schema({
    username:{
        type: String,
        required:[true,"Username is required"],
        minlength:[4,"Min length should be 4"],
        maxLength:[6,"Max length should be 6"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[18,"Age should be above 18"],
        max:[23,"Age should be less than 25"]
    }
},
{
    strict:"throw",
    timestamps:true
});

//Create the model with that schema
export const userModel=model("user",userSchema);
