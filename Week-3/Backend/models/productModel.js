import exp from "express";
import { Schema,model } from "mongoose";

//Create Schema of the product
const productSchema = new Schema({
    product_name:{
        type:String,
        required:[true,"Product Name is required "]

    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        min:[1,"Price must be more than 1 rupee"],
    },
    category:{
        type:String,
        required:[true,"Category of the product is required"]
    },
    stock:{
        type:Number,
        required:[true,"Stock of the product is required"],
        max:[100,"Maximum of 100 items can be stocked"]
    }
},
{
    strict:"throw",
    timestamps:true
});

//create model of the schema
export const productModel=model("product",productSchema);