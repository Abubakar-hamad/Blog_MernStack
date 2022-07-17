dotenv.config();
connectDB();
import express  from "express";
import cors from 'cors' ; 
import dotenv from 'dotenv' ;
import connectDB from "./config/db.js";
import Hotel from "./routes/hotelRoutes.js";
import Auth from "./routes/authRoutes.js";
import User from "./routes/userRoutes.js";
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import errorHandler from "./middleware/error.js"
import Room from "./routes/roomRoutes.js";
const port  = process.env.PORT || 5000
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


//middlewares

app.use('/api/auth' , Auth)
app.use('/api/user' , User)
app.use('/api/hotel' , Hotel)
app.use('/api/room' , Room)

app.use(errorHandler)


// connect Port
app.listen(port , ()=>{
    console.log(`connected with PORT number ${port}`);
})