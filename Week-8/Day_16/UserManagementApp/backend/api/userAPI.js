//Create mi-express app
import exp from "express";
import userModel from "../models/userModel.js";

export const userApp = exp.Router(); //to use this router in server.js we need to export it and import in server.js and use it as middleware
//USER API ROUTES

//Create User
userApp.post("/users", async (req, res) => {
  //get new user
  const newUser = req.body;
  //create user document
  const newUserDoc = new userModel(newUser);
  //save user document
  let newUSer = await newUserDoc.save();
  res.status(201).json({ message: "User created successfully", user: newUser });
});
//Read all users
userApp.get("/users", async (req, res) => {
  const users = await userModel.find();
  res.status(200).json({ message: "Users fetched successfully", users });
});
// read a user by Id
userApp.get("/users/:id", async (req, res) => {
  const userId = req.params.id;
  //find user by id
  let userTheir = await userModel.findById(userId);
  if (!userTheir) {
    //send res
    return res.status(404).json({ message: "User not found" });
  }
  const user = await userModel.findOne({ _id: userId, status: true });
  if (user) {
    //send res
    return res.status(200).json({ message: "User found", package: user });
  }
  res.status(404).json({ message: "User removed" });
});
// Delete a user by id
userApp.delete("/users/:id", async (req, res) => {
  //get user id
  const userId = req.params.id;
  //delete user
  const deleteUser = await userModel.findByIdAndUpdate(userId, {
    $set: { status: false }},
    {new: true}
    );
  if (!deleteUser) {
    //send res
    return res.status(404).json({ message: "User not found" });
  }
  //send res
  res.status(200).json({ message: "User deleted Successfully",payload:deleteUser });
});

//Activate a user by id
userApp.patch("/users/:id", async (req, res) => {
  let userId = req.params.id;
  let user = await userModel.findByIdAndUpdate(userId, {
    $set: { status: true }},
    {new: true}
  );
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: "User activated successfully",payload:user });
});
// update user by id
