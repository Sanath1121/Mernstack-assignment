//create http Server
import exp from "express";
import {connect} from "mongoose";
import { userApp } from "./api/userAPI.js";
import cors from "cors";
config();

app.use(cors());
const app=exp()
const port=4000;

//connect db
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/User-Management')
        console.log("DB connection success");
        app.listen(port,()=>console.log(`app is listening on port &{port}`))
    }
    catch(err){
        console.log("DB connection failed",err);
    }
}
connectDB();

app.use(exp.json())

app.use('/user-api',userApp) //to use this router in server.js we need to export it and import in server.js and use it as middleware

//add error handling middleware
app.use((err,req,res,next)=>{
    console.log("Error in middleware",err);
    res.status(500).json({message:"Something went wrong",description:err.message})
});


app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
  
});
