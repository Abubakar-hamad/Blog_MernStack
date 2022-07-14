import mongoose from 'mongoose' ;
import dotenv from 'dotenv'
import colors from 'colors'


const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`connected to MongoDB : ${conn.connection.host}`.yellow);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}


export default connectDB