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

// GET ONE HOTEL FUNCTION
export const getHotel = asyncHandler(async(req ,res)=>{
    const hotel = await HotelModel.findById(req.params.id)
    if(!hotel){
        return res.status(404).json("hotel not Found")
    } 
    res.status(200).json(hotel)
})



// GET ALL HOTELS FUNCTION

export const getHotels = asyncHandler(async(req,res)=>{
    const {min  , max , ...others }= req.query
    const hotels = await HotelModel.find({
        ...others , 
        cheapestPrice:{$gt:min ||1 , $lt:max || 500}
    })
    if(!hotels){
        return res.status(401).json({message:'Error fithching Data'})
    }
    return res.status(200).json(hotels)
})


export const countByCity = asyncHandler(async(req,res)=>{
    const cities = req.query.cities.split(",")
 
    const list  = await Promise.all(cities.map(city=>{
        return HotelModel.countDocuments({city})
    }))
    return res.status(200).json(list)
})


export const countByType = asyncHandler(async(req,res)=>{
   
    const honeymoonCount = await HotelModel.countDocuments({type:"honeymoon"})
    const relaxingCount = await HotelModel.countDocuments({type:"relaxing"})
    const travelingCount = await HotelModel.countDocuments({type:"traveling"})
    
    return res.status(200).json([
        {type:"honeymoon" , count:honeymoonCount},
        {type:"relaxing" , count:relaxingCount},
        {type:"traveling" , count:travelingCount},
    ])
})