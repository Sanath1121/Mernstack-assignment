import exp from "express";
import {config} from "dotenv"
import {connect} from "mongoose";
import { userRoute } from "./APIs/userAPI.js";
import { authorRoute } from "./APIs/authorAPI.js";
import { adminRoute } from "./APIs/adminAPI.js";
import { commonRouter } from "./APIs/commonAPI.js";
import cookieParser from "cookie-parser";
config() //process.env

const app=exp();
//body parser middleware
app.use(exp.json())
app.use(cookieParser())
//connect apis
app.use("/user-api",userRoute);
app.use("/admin-api",adminRoute);
app.use("/author-api",authorRoute);
app.use("/common-api",commonRouter)

//connect to database
const connectDb=async()=>{
    try{
        await connect(process.env.DB_URL);
        console.log("Database connected");
        app.listen(process.env.PORT,()=>console.log("Server started"));
    }
    catch(err){
        console.log("Err in DB connection",err);
    }

}

connectDb();

// dealing with invalid path
app.use((req,res,next)=>{
    res.json({message:`${req.url} is an invalid url`});
})

//error handling middleware dealing with invalid path
// app.use((err,req,res,next)=>{
//     console.log("Error:",err);
//     res.json({message:"Error",error:err.message});
//     next();
// })

