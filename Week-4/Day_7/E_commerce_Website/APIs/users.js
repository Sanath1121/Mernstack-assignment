import exp from "express";
import {userModel} from '../models/userModel.js';
import {compare} from 'bcryptjs';
import { productModel } from "../models/productModel.js";


export const userApp=exp();

userApp.post("/users",async(req,res)=>{
    //get new user obj from req
    let userObj=req.body;
    //create new user Document
    let userDocument=new userModel(userObj);
    await userDocument.save();
    res.status(200).json({message:"new user added",payload:userDocument})
})

userApp.put("/users/userid/:uid/productid/:pid",async(req,res)=>{
    let uid=req.params.uid;
    let pid=req.params.pid;
    let product=await productModel.findById(pid);
    let user =await userModel.findByIdAndUpdate(uid,{$push:{cart:{product}}},{new:true,runValidators:false})
    console.log(product)
    res.status(200).json({message:"Product added to cart",payload:user});
})

userApp.get('/users/:id',async(req,res)=>{
    let objId=req.params.id;
    let user=await userModel.findById(objId).populate("cart.product");
    res.status(200).json({message:"User Found",payload:user})
})

