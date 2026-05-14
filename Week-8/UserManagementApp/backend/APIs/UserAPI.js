import exp from 'express'
import { UserModel } from '../Models/UserModel.js'

//create min server
export const userApp = exp.Router()

//User API routes

//read all Users
userApp.get('/users', async (req, res, next) =>{
  try {
    //read all users
    let usersList = await UserModel.find({status: true})
    //send res
    res.status(200).json({message: 'Users', payload: usersList})
  } catch(err) {
    next(err)
  }
})

//read user by id
userApp.get('/users/:id', async(req, res, next)=>{
  try {
    //get id from req
    let uid = req.params.id
    //find user by id
    let userInDb = await UserModel.findOne({_id: uid, status: true})
    //check user
    if(!userInDb){
        return res.status(404).json({message: "User not found"})
    }
    //send res
    res.status(200).json({message: "User found", payload: userInDb})
  } catch(err) {
    next(err)
  }
})

//create user
userApp.post('/users', async(req, res, next) =>{
  try {
    //get new user
    const newUser = req.body
    //create user document
    const newUserDoc = new UserModel(newUser)
    //save doc
    let user = await newUserDoc.save()
    //send res
    res.status(201).json({message: "User created", payload: user})
  } catch(err) {
    next(err)
  }
})


//del user by id
userApp.delete('/users/:id', async(req, res, next) =>{
  try {
    //get if from url
    let uid = req.params.id
    //find user by id and update
    let userInDb = await UserModel.findByIdAndUpdate(uid, {$set: {status: false}})
    //checck for user
    if(!userInDb){
        return res.status(404).json({message: "User not found"})
    }
    //send res
    res.status(200).json({message: "User removed"})
  } catch(err) {
    next(err)
  }
})

//activate user(change status to true)
userApp.patch('/users/:id', async(req, res, next) =>{
  try {
    //get if from url
    let uid = req.params.id
    //find user by id and update
    let userInDb = await UserModel.findByIdAndUpdate(uid, {$set: {status: true}}, {new: true})
    //send res
    res.status(200).json({message: "User Activated", payload: userInDb})
  } catch(err) {
    next(err)
  }
})

//update user by id
userApp.put('/users/:id', async(req, res, next) =>{
  try {
    //get id from url
    let uid = req.params.id
    //get updated user data
    let updatedData = req.body
    //find user by id and update
    let userInDb = await UserModel.findByIdAndUpdate(uid, {$set: updatedData}, {new: true})
    //check for user
    if(!userInDb){
        return res.status(404).json({message: "User not found"})
    }
    //send res
    res.status(200).json({message: "User Updated", payload: userInDb})
  } catch(err) {
    next(err)
  }
})
