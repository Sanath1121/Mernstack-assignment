import exp from "express"
import { Schema,model } from "mongoose"

const productSchema=new Schema({
    productName:{
        type:String,
        required:[true,"Product name is required"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"]
    },
    brand:{
        type:String,
        required:[true,"Brand is required"]
    }
},
{
    strict:"throw",
    timeseries:true,
    versionKey:false
});

export const productModel=model("product",productSchema);