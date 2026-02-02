import exp from "express";
import {productModel} from '../models/productModel.js'

export const productApp=exp.Router();

//Create new product
productApp.post("/products",async(req,res)=>{
    //get document from request
    let newProduct=req.body;

    //create new user Document
    let newProductDocument=new productModel(newProduct);
    await newProductDocument.save()

    res.status(201).json({message:"Product created",payload:newProductDocument})

})

//Read all products
productApp.get('/products',async(req,res)=>{
    //get all documents in products
    let productList=await productModel.find()
    //response
    res.status(201).json({message:"All products",payload:productList})

})

//find products using product ID
productApp.get('/products/:id',async(req,res)=>{
    let objId=req.params.id;
    //get all documents in products
    let productList=await productModel.findById(objId)
    //response
    res.status(201).json({message:"Product found",payload:productList})

})

//Update user data
productApp.put('/products/:id',async(req,res)=>{
    let objId=req.params.id;
    let newDocument=req.body;
    let newProduct=await productModel.findByIdAndUpdate(objId,{$set:{...newDocument}},{new:true})
    res.status(201).json({message:"Product details updated successfully",payload:newProduct})
})

//Delete User
productApp.delete('/products/:id',async(req,res)=>{
    let objId=req.params.id;
    let deletedObj=await productModel.findByIdAndDelete(objId);
    res.status(300).json({message:"File deleted successfully",payload:'Deleted file ${deletedObj}'})
})
