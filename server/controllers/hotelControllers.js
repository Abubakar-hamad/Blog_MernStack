import HotelModel from "../models/HotelModel.js";
import UserModel from "../models/UserModel.js";
import asyncHandler from 'express-async-handler';


export const createNewHotel = asyncHandler(async(req,res)=>{
    // const {title , type , city  , address , des ,cheapestPrice , featurePrice} = req.body
    // if(!title || !type || !city  || !address  || !des || !cheapestPrice || !featurePrice){
    //     return res.status(400).json('please fill all fields')
    // }

    const Hotel = await HotelModel.create({
        title:req.body.title,
        type:req.body.type,
        city:req.body.city,
        address:req.body.address,
        des:req.body.des,
        cheapestPrice:req.body.cheapestPrice,
        featurePrice:req.body.featurePrice,
    
    })
    


    res.status(201).json({successfully:Hotel})
})