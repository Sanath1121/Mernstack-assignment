import exp from "express";
import {UserTypeModel} from '../models/userModel.js'
import {ArticleModel} from '../models/articleModel.js'
import {register,authenticate} from '../Services/authService.js' 
export const userRoute=exp.Router();

//Register User
userRoute.post('/users',async(req,res)=>{
    //get user obj
    let userObj=req.body;
    //call register
    const newUserObj=await register({...userObj,role:"USER"});
    //send res
    res.status(201).json({message:"UserCreated",payload:newUserObj});
})


//Login User
userRoute.post("/authenticate", async (req, res) =>{
  //get user cred object
  let userCred = req.body;
  //call authenticate service
  let { token, user } = await authenticate(userCred);
  //save tokan as httpOnly cookie
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });
  //send res
  res.status(200).json({ message: "login success", payload: user });
})
//Read all articles
//Add comment to an article
userRoute.post('/user/:userId/:articleId',async(req,res)=>{
    let {userId,articleId} = req.params;
    let userPresent= await UserTypeModel.findById(userId);
    let comment=req.body;
    let articlePresent= await ArticleModel.findById(articleId);
    if(!userPresent || !articlePresent)
        return res.status(404).json({message:"User or article not found"})
    let newComment=await ArticleModel.findByIdAndUpdate(articleId,{
        $set:{
            comment:{
                user:userId,
                comment:comment
            }
        }
    },{new:true})
})