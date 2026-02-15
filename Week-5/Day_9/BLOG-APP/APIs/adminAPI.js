import exp from "express";
import {UserTypeModel} from '../models/userModel.js';
import {ArticleModel} from '../models/articleModel.js'
import {compare} from "bcryptjs"
import jwt from "jsonwebtoken"
import {authenticate} from "../Services/authService.js"
import {config} from "dotenv"
import { trusted } from "mongoose";
import { verifyToken } from "../middleware/verifyToken.js";
config() //process.env
export const adminRoute=exp.Router();

//Authenticate admin 
adminRoute.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    let {token, user}=await authenticate({email:email,password:password,role:"ADMIN"});
    console.log(token);
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    });
    res.status(200).json({message:"Login successful",token:token});
});
//Read all articles(optional)
adminRoute.get("/articles",verifyToken,async(req,res)=>{
    let articles=await ArticleModel.find().populate({path:"author",select:"email firstName lastName"})
    res.status(200).json({message:"Articles fetched successfully",articles:articles});
})
//Block users by ID
adminRoute.post("/block-id",async(req,res)=>{
    let {userId}=req.body;
    let user=await UserTypeModel.findById(userId);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    user.isActive=false;
    await user.save();
    res.status(200).json({message:"User blocked successfully",payload:user});
})
//Block users by email
adminRoute.post("/block-email",async(req,res)=>{
    let {email}=req.body;
    let user=await UserTypeModel.findOne({email});
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    user.isActive=false;
    await user.save();
    res.status(200).json({message:"User blocked successfully",payload:user});
})
// Unblock users by ID
adminRoute.post("/unblock-id",async(req,res)=>{
    let {userId}=req.body;
    let user=await UserTypeModel.findById(userId);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    user.isActive=true;
    await user.save();
    res.status(200).json({message:"User unblocked successfully",payload:user});
})
//Unblock users by email
adminRoute.post("/unblock-email",async(req,res)=>{
    let {email}=req.body;
    let user=await UserTypeModel.findOne({email});
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    user.isActive=true;
    await user.save();
    res.status(200).json({message:"User unblocked successfully",payload:user});
})