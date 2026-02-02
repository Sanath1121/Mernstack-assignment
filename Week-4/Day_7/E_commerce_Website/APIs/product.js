import exp from "express";
import { productModel } from '../models/productModel.js';
import {compare} from 'bcryptjs';

export const productApp=exp.Router();

//route to create new product
productApp.post('/products',async(req,res)=>{
    //get product from req
    let prodObj=req.body;
    //create product document
    let prodDocument=new productModel(prodObj);
    
    await prodDocument.save()
    res.status(200).json({message:"Product created",payload:prodDocument})
})

productApp.get('/products/:id',async(req,res)=>{
    let objId=req.params.id;
    let product=await productModel.findById(objId);
    res.status(200).json({message:"Product Found",payload:product})
})


