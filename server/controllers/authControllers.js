import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'



export const getUser = asyncHandler(async(req  ,res)=>{
    return res.status(200).json({message:'nice to meet u'})
})

export const registerUser = asyncHandler(async(req , res)=>{
    return res.status(201).json({message:'user register successfully'})
})

export const loginUser  = asyncHandler(async(req, res)=>{
    return res.status(202 ).json({message:'logged success'})
})