import exp from "express";
import {ArticleModel} from '../models/articleModel.js'
import {UserTypeModel} from '../models/userModel.js'
import {register,authenticate} from '../Services/authService.js'
import mongoose from "mongoose";
import {verifyToken} from '../middleware/verifyToken.js'
import {checkAuthor} from '../middleware/checkAuthor.js'

export const authorRoute=exp.Router();


//Register author
authorRoute.post('/users',async(req,res)=>{
    let authObj=req.body;
    const newAuth=await register({...authObj,role:"AUTHOR"});
    res.status(201).json({message:"New Author created",payload:newAuth}); 
})
//Login author
authorRoute.post('/authenticate',async(req,res)=>{
      //get user cred object
    let authObj=req.body;
      //call authenticate service
    const {token,user}=await authenticate(authObj);
    //save tokan as httpOnly cookie
    if(!token)
        res.status(401).json({message:"No token"})
    // console.log(token)
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        samesite:"lax",

    });
    console.log(res.cookie)
    res.status(200).json({message:"Login successfull",payload:user})
})
//Create article
authorRoute.post('/articles',async(req,res)=>{
    let articleObj=req.body;
    let authorPresent=await UserTypeModel.findById(articleObj.author);
    if(!authorPresent)
        return res.status(404).json({message:"Invalid author"});
    let articleDoc=new ArticleModel(articleObj);
    let createdArticle=await articleDoc.save();
    res.status(200).json({message:"Article published", payload:createdArticle});
})
//Read articles of author
authorRoute.get('/articles/:authorId',async(req,res)=>{
    //get auth id
    let {authorId} = req.params;
    //check auth id
    let authorPresent=await UserTypeModel.findById(authorId);
    if(!authorPresent || authorPresent.role!='AUTHOR')
        return res.status(404).json({message:"Invalid author"});
    //read the article by the auth
    let article=await ArticleModel.find({author:authorId});
    //send res
    res.status(200).json({message:"Article found",payload:article})
})
//Edit article
authorRoute.put("/articles",verifyToken ,checkAuthor,async (req, res) => {
  //get modified article from req
  let { articleId, title, category, content,author } = req.body;
  //find article
  let articleOfDB = await ArticleModel.findOne({_id:articleId,author:author});
  if (!articleOfDB) {
    return res.status(401).json({ message: "Article not found" });
  }
  //update the article
  let updatedArticle = await ArticleModel.findByIdAndUpdate(
    articleId,
    {
      $set: { title, category, content },
    },
    { new: true },
  );
  //send res(updated article)
  res.status(200).json({ message: "article updated", payload: updatedArticle });
});

//Delete(soft delete) article
authorRoute.put('/article/:authorId/:articleId',async(req,res)=>{
    let {authorId,articleId} = req.params;
    let newContent=req.body;
    let authorPresent=await ArticleModel.findOne({author:authorId, _id:articleId});
    if(!authorPresent || authorPresent.role!='AUTHOR')
        return res.status(404).json({message:"Invalid author"});
    let deletedArticle=await ArticleModel.findByIdAndUpdate(articleId,{$set:{isArticleActive:false}},{new:true});
    res.status(200).json({message:"Article deleted", payload:deletedArticle})
})


