import exp from "express";
import {userModel} from '../models/userModel.js';
import {hash,compare} from 'bcryptjs';
import { productModel } from "../models/productModel.js";
import {Types} from "mongoose"



export const userApp=exp();

userApp.post("/users",async(req,res)=>{
    //get new user obj from req
    let userObj=req.body;
    //run validators
    await new userModel(userObj).validate();
    //hash password
    let hashedPassword=await hash(userObj.password,10)
    //replace new password with hashed password
    userObj.password=hashedPassword;
    //create new user Document
    let userDocument=new userModel(userObj);
    await userDocument.save({validateBeforeSave:false});
    res.status(200).json({message:"new user added",payload:userDocument})
})

//Req to add product to cart
userApp.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=>{
    let {uid,pid}=req.params;
    let user =await userModel.findById(uid);
    if(!user)
        return res.status(404).json({message:"User not found"});
    let product=await productModel.findById(pid);
    let productInCart=  user.cart.find((carts)=>carts.product.toString()==pid);
    console.log(productInCart)
    if(productInCart){
        let ind=  user.cart.findIndex((carts)=>carts.product._id==pid);
        // let increaseQuantity= await userModel.findByIdAndUpdate(uid,{$inc:{[`cart.${ind}.quantity`]:1}});
        user.cart[ind].quantity+=1;
        await user.save()
        return res.status(200).json({message:"product quantity updated",payload:user})
    }
    user =await userModel.findByIdAndUpdate(uid,{$push:{cart:{product:pid}}},{new:true}).populate("cart.product","productName price");
    res.status(200).json({message:"Product added to cart",payload:user});
})

//Find user by id
userApp.get('/users/:id',async(req,res)=>{
    let objId=req.params.id;
    let user=await userModel.findById(objId).populate("cart.product","productName price"); //this can help decide what fields of cart to be displayed 
    res.status(200).json({message:"User Found",payload:user})
})

