import HotelModel from "../models/HotelModel.js";
import asyncHandler from 'express-async-handler';


export const createNewHotel = asyncHandler(async(req,res)=>{
    const {name , type , city  , address , des ,cheapestPrice , featurePrice} = req.body
    if(!name || !type || !city  || !address  || !des || !cheapestPrice ){
        return res.status(400).json('please fill all fields')
    }

    const hotelName = await HotelModel.findOne({name})

    if(hotelName){
         return res.status(400).json("the hotel Name Already Created")
    }

    const Hotel =  new HotelModel(req.body)
    await Hotel.save();

    res.status(201).json({successfully:Hotel})
})


//UPDATE FUNCTION 
export const updateHotel = asyncHandler(async(req , res)=>{
    const updateH = await HotelModel.findByIdAndUpdate(req.params.id)
    if(!updateH){
        return res.status(401).json({message:'there is no Hotel with this id'})
    }

    const updateHot = await  HotelModel.findByIdAndUpdate(req.params.id , req.body , {new:true})
    return res.status(201).json({updatedSuccessfully:updateHot})
})


// DELETE FUNCTION

export const deleteHotel = asyncHandler(async(req, res)=>{
    const hotelD = await HotelModel.findByIdAndDelete(req.params.id)
    
    if(!hotelD){
        return res.status(404).json({message:'there is no Hotel with this id'})
    }

    // const deletedHotel = await HotelModel.findByIdAndDelete(req.params.id , )

    return res.status(200).json({HtelDeletedSuccessfully:req.params.id})
})


// GET ALL HOTELS FUNCTION

export const getHotels = asyncHandler(async(req,res)=>{
    const hotels = await HotelModel.find()
    if(!hotels){
        return res.status(401).json({message:'Error fithching Data'})
    }
    return res.status(200).json(hotels)
})