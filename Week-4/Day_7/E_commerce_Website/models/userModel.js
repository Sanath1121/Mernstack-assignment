import exp from "express"
import { Schema,model } from "mongoose"
import mongoose from "mongoose"
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref: 'product' //name of product model
    },
    quantity:{
        type:Number,
        default:1
    }

})
const userSchema=new Schema({
        username:{
            type:String,
            required:[true,"USername is required"],
            minLength:[3,"Minimum length of username is 3"],
            maxLength:[10,"Max length of username is 10"],
            unique:true
        },
        password:{
            type:String,
            required:[true,"Password is required"],
            minLength:[8,"Length of password must be minimum 8"]
        },
        email:{
            type:String,
            required:[true,"Email is required"],
            unique:[true,"dup user"]
        },
        cart:{
            type:[cartSchema],
        },
        
        
            
        
},
{
    strict:"throw",
    timeseries:true,
    versionKey:false
})

export const userModel=model("user",userSchema);