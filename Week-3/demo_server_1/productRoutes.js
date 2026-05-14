import exp from "express"
//Create mini express route
export let productApp=exp.Router()
let products=[];

productApp.get("/products",(req,res)=>{
    res.status(200).json({message:"products",payload:products})
})

productApp.get("/products/:id",(req,res)=>{})

productApp.get("/products",(req,res)=>{})

productApp.get("/products",(req,res)=>{})

productApp.get("/products",(req,res)=>{})

productApp.get("/products",(req,res)=>{})
