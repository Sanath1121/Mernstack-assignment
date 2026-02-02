import exp from "express"
import { Schema,model } from "mongoose"
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref: 'product' //name of product model
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
            required:[true,"Password is required"]
        },
        email:{
            type:String,
            required:[true,"Email is required"],
            unique:true
        },
        cart:{
            type:[cartSchema]
        }
},
{
    strict:"throw",
    timeseries:true,
    versionKey:false
})

export const userModel=model("user",userSchema);