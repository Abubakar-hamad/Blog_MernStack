import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
    isStaff:{
        type:Boolean,
        default:false
    },
    userImg:{
        data: Buffer,
        contentType: String,
        required:false
    }


},{timestamps:true})



const UserModel = mongoose.model("users" , userSchema)
export default UserModel