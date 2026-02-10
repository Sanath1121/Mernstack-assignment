import exp from "express";
import {connect} from "mongoose";
import {userApp} from './APIs/users.js';
import {productApp} from './APIs/product.js';

const app=exp();
const port=4000;

//connect to db server
//what is async function?
//async function is a function that returns a promise and can be awaited.
//why do we use async function here?
//because mongoose connect returns a promise
//what is a promise?
//a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//why do we use await here?
//because we want to wait for the promise to be resolved before moving to the next line of code.
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/anuragdb2')
        console.log('DB connection success');
        //Assign port
        app.listen(port,()=>console.log(`Server is listening on ${port}`));
    }
    catch(err){
        console.log('Error connecting to mongoDB', err);
    }
}
connectDB();

//body parser middleware
app.use(exp.json());

app.use('/user-api',userApp);

app.use('/product-api',productApp)

function errorhandler(err,req,res,next){
    res.json({message:"Error",payload:err});
    next();
}
app.use(errorhandler);

