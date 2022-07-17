import mongoose from "mongoose"


const userSchema = mongoose.Schema({
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
    userProfile:{
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