import exp from "express";
import {userModel} from '../models/usersModel.js'
export const userApp=exp.Router();
//USER api routes

//create user
//read user
userApp.get('/users',async(req,res)=>{
    //read user from DB
    let usersList=await userModel.find({},{username:1,_id:0,age:1});
    res.status(200).json({message:"All users",payload:usersList})

})

userApp.post('/users',async(req,res)=>{
    // let user=await userModel.insertOne(req);
    // res.status(100).json({message:"User entered",payload:user})

    //get new user from req
    let newUser=req.body;
    
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