import RoomModel from "../models/RoomModel.js";
import HotelModel from "../models/HotelModel.js";
import asyncHandler from "express-async-handler";

export const createRoom = asyncHandler(async(req,res)=>{
    const hotelID = req.params.hotelID
    const newRoom = new RoomModel(req.body)
    const savedRoom = await newRoom.save(); 
    try {
        await HotelModel.findByIdAndUpdate(hotelID , {$push:{rooms:savedRoom._id}})
        res.status(201).json("created Room Successfully")
    } catch (error) {
        res.status(400)
        throw new Error({"filed To Save":error})
    }

}) 



//UPDATE FUNCTION 
export const updateRoom = asyncHandler(async(req , res)=>{
    const updateR = await RoomModel.findByIdAndUpdate(req.params.id)
    if(!updateR){
        return res.status(401).json({message:'there is no Room with this id'})
    }

    const updateHot = await  RoomModel.findByIdAndUpdate(req.params.id , req.body , {new:true})
    return res.status(201).json({updatedSuccessfully:updateHot})
})


// DELETE FUNCTION

export const deleteRoom = asyncHandler(async(req, res)=>{
    const roomD = await RoomModel.findByIdAndDelete(req.params.id)
    const hotelID = req.params.hotelID
    
    if(!roomD){
        
        return res.status(404).json({message:'there is no Room with this id'})
    }

    try {
        await HotelModel.findByIdAndUpdate(hotelID , {$pull:{rooms:req.params.id}})
        res.status(201).json("created Room Successfully")
    } catch (error) {
        res.status(400)
        throw new Error({"filed To Save":error})
    }

    return res.status(200).json({HtelDeletedSuccessfully:req.params.id})
})


// GET ALL RoomS FUNCTION

export const getRoom = asyncHandler(async(req,res)=>{
    const room = await RoomModel.find()
    if(!room){
        return res.status(401).json({message:'Error fithching Data'})
    }
    return res.status(200).json(room)
})