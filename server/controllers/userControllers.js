import UserModel from "../models/UserModel.js";
import jwt  from "jsonwebtoken";
import asyncHandler from "express-async-handler";


export const updateUser =asyncHandler(async(req, res) =>{
    const user = await UserModel.findByIdAndUpdate(req.params.id ,{$set:req.body} , {new:true})
    if(!user){
        res.status(400) 
        throw new Error("somthing went wrong")
    }
    if(user.email)
    res.status(201).json(user)
}) 


export const deleteUser = asyncHandler(async(req, res)=>{
    const user = await UserModel.findByIdAndRemove(req.params.id)
    res.status(200).json(`deleted user with id ${user.id} success`)
})


export const getUser = asyncHandler(async(req,res)=>{
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user)
})



// get all users
export const getUsers = asyncHandler(async(req,res)=>{
    const users = await UserModel.find()
    if(!users){
        res.status(400)
        throw new Error("Thers is No Users yet")
    }
    res.status(200).json(users)
})