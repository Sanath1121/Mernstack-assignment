import exp from "express";
import {userModel} from '../models/usersModel.js'
export const userApp=exp.Router();
import {hash,compare} from "bcryptjs";
import jwt from "jsonwebtoken"
import { verifyToken } from "../middleware/verifyToken.js";
//USER api routes

//create user
//read user
userApp.get('/users',async(req,res)=>{
    //read user from DB
    let usersList=await userModel.find({},{username:1,password:1,_id:0,age:1});
    res.status(200).json({message:"All users",payload:usersList})

})


//hash password
userApp.post('/users',async(req,res)=>{
    // let user=await userModel.insertOne(req);
    // res.status(100).json({message:"User entered",payload:user})

    //get new user from req
    let newUser=req.body;
    //hash the password
    let hashedPassword=await hash(newUser.password,12)
    //replace the plain password with hashed password
    newUser.password=hashedPassword;
    //create new user document
    let newUserDocument = new userModel(newUser);
    await newUserDocument.save()

    //send response
    res.status(201).json({message:"User created", payload:newUserDocument})
})

// read user by object id
userApp.get('/users/:id',async(req,res)=>{
    //get objectId from url parameter
    let objId=req.params.id;

    //find user in database
    let userObj=await userModel.findById(objId);
    if(userObj)
        res.status(201).json({message:"User found",payload:userObj})
    else
        res.status(201).json({message:"User not found",payload:userObj})

})

//update user
userApp.put('/users/:id',async(req,res)=>{
    //find the document by id
    //get objectId from req
    let objId=req.params.id;
    //get modifies object from req
    let objDocument=req.body;
    console.log(objDocument)
    //update
    let ack=await userModel.findByIdAndUpdate(objId,{$set:{...objDocument}},{new:true});
    res.status(201).json({message:"Data updated", payload:ack})
})

//delete user
userApp.delete('/users/:id',async(req,res)=>{
    //get object ID from request
    let  objId=req.params.id;
    console.log(objId);
    //delete document
    let deletedDocument=await userModel.findByIdAndDelete(objId);
    res.status(200).json({message:"User Deleted", payload:deletedDocument})
})

//User authentication request (Log in request)
userApp.post('/auth',async(req,res)=>{
    //get user cred object
    let userCred=req.body;  //destructured
    
    //Check for username
    let userOfDB=await userModel.findOne({username:userCred.username})

    //if user not found
    if(userOfDB==null)
        return res.status(404).json({message:"Invalid user name"})
    
    //compare password
    let status=await compare(userCred.password,userOfDB.password)

    //if pass not matched
    if(status==false)
        return res.status().json({message:"Password did not match"})

    //create signed token
    let signedToken=jwt.sign({username:userCred.username},'secret',{expiresIn:3})
    //send token as HTTP ONLY
    res.cookie("Token",signedToken,{
        httpOnly:true, //it is http only cookie
        secure:false,
        sameSite:"lax" 
    });

    //send token to res
    res.status(200).json({message:"Login Success"})
})  

//test route
userApp.get('/test',verifyToken,async(req,res)=>{
    console.log(req.cookies)
    res.json({message:"Valid"});
});