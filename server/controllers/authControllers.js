import UserModel from "../models/UserModel.js";
import  jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import asyncHandler from "express-async-handler";


export const  createUser =  asyncHandler(async(req, res)=>{
    const {name , email , password } = req.body
    // check if fild empty
    if(!email || !name || !password){
        res.status(400)
        throw new Error("some fildes empty")
    }

    // check if email already create
    const userExist = await UserModel.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error ("Email already used")
    }

    // crypt Password
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password , salt)

    const user = new UserModel(
        {
            ...req.body ,
            password:hashedPass
        })
    await user.save();
    res.status(201).json(user)
})


export const loginUser = asyncHandler(async(req , res)=>{
    

    // check if email exist 
    const user = await UserModel.findOne({email:req.body.email})
    if(!user){
        res.status(404)
        throw new Error("there is no acoount with this Email")
    }

    // compare pass
    const isPassCorrect = await bcrypt.compare(req.body.password , user.password)
    if(!isPassCorrect){
        res.status(400)
        throw new Error ("wrong password or email")
    }
    

    // create token
    const token = jwt.sign(
        {id:user._id  , isAdmin:user.isAdmin}, process.env.JWT_SEC 
    ) 

    // getUSer to ui
    const {password , isAdmin , ...otherDetails} = user._doc
    res.cookie("access_token" , token , {httpOnly:true}).status(200).json(otherDetails  ) 
})


