import mongoose from "mongoose";

const PostSchema = mongoose.Schema({


    title:{
        type:String ,
        required:true
    },
    author:{
        type:String ,
        required:true
    },
    category:{
        type:Selection,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    comment:{
        type:String
    }
},
    {
    taimestamps:true
    }
)

const PostModel = mongoose.model("post" , PostSchema)

export default PostModel;