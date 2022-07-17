import mongoose from "mongoose"


const userSchema = mongoose.Schema({
    userProfile:{
        type:String
    },
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    address:{
        type:String
    },
    isAdmin :{
        type:Boolean,
        default:false
    }

},{timestamps:true})


const UserModel = mongoose.model('users' , userSchema)

export default UserModel