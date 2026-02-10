import exp from "express"
import {authenticate} from '../Services/authService.js'
export const commonRouter=exp.Router()

//login
commonRouter.post('/login',async(req,res)=>{
    let obj=req.body;
    let {token,user}= authenticate({obj,role:"AUTHOR"})
    res.cookie("token",token,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    res.status(205).json({message:"Logged in successfully",payload:user})
})
//logout
commonRouter.post('/logout',async(req,res)=>{
    res.clearCookie("token",{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    res.status(200).json({message:"Logged out successfully"})
})