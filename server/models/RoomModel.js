import mongoose from "mongoose";


const roomSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
    },
    roomNumber:[{ 
        number:Number,
        unavilableDates:[{type:Date}]
    }]
        
    
} , 
{timestamps:true}
)


const RoomModel = mongoose.model("rooms" , roomSchema)
export default RoomModel