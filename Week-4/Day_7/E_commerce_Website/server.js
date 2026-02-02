import cookieParser from "cookie-parser";
import exp from "express";
import {connect} from "mongoose"; 
import {userApp} from './APIs/users.js'
import {productApp} from './APIs/product.js'
//Create http server
let app=exp();
let port=4000;
//connect to mongoDB database
async function connectionDb(){
    try{
        await connect('mongodb://localhost:27017/AnuragEcommerce')
        console.log("Database connected successfully");
        app.listen(port,()=>console.log(`Server is listening on port no. ${port}`));
    }
    catch(err){
        console.log("Database connection failed",err);
    }
}
connectionDb();
//Body parser middleware
app.use(exp.json());

app.use(cookieParser());
//Forward request to specific API's
app.use("/user-api",userApp)
app.use("/product-api",productApp)
//Use Errorhandler


