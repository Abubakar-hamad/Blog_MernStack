import mongoose from "mongoose";

const hotelSchema = mongoose.Schema({


    name:{
        type:String ,
        required:true
    },
    type:{
        type:String ,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String ,
        required:true
    },
    photos:{
        type:[String],
    },
    des:{
        type:String ,
        required:true
    },
    rating:{
        type:Number ,
        min:0 ,
        max:5
    } ,
    cheapestPrice:{
        required:true ,
        type:Number
    },
    rooms:{
        type:[String]
    },
    feature:{
        type:Boolean ,
        default:false
    }
},{timestamps: true,})

const HotelModel = mongoose.model("hotel" , hotelSchema)

export default HotelModel;