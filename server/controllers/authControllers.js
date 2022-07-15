import UserModel from '../models/UserModel.js'
import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export const registerUser = asyncHandler(async(req , res)=>{
    const {name , email , password} = req.body ;
    // check if any fields empty
    if(!name || !email || !password){
        return res.status(400).json('please fill all fields')
    }
    
    // check if user exists    
    const userExists = await UserModel.findOne({email})
    if(userExists){
        return res.status(400).json('This Email Is Already Existing')
    }

    // encrypt password 
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password , salt)

    // create user in DB
    const user = await UserModel.create({
        name ,
        email , 
        password:hashedPass
    })

    if(user){
        return res.status(201).json({
                message:'User Created Successfully',
                id:user.id ,
                name:user.name ,
                email:user.email ,
                password:user.password ,
                token:generateToken(user._id)
            })
    }else{
        return res.status(400).json("Error In Inserted Data")
    }


})

export const loginUser  = asyncHandler(async(req, res)=>{
    const {email , password} = req.body
    const user = await UserModel.findOne({email})
    if(!user){
        res.json('No Email Exist')
    }
    if(user && (await bcrypt.compare(password , user.password))){
        res.status(200).json({
            _id:user.id , 
            name:user.name ,
            email:user.email,
            toker:generateToken(user._id)
        })
    }else{
        return res.status(400).json({
            message:'Email Or Password Is Error '
        })
    }
})

export const getUser = asyncHandler(async(req  ,res)=>{
    return res.status(200).json({message:'nice to meet u'})
})


// generate JWT

const generateToken = (id)=>{
    return jwt.sign({id} , process.env.JWT_SEC , {expiresIn:'1d'})
}

