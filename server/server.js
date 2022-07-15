import express  from "express";
import cors from 'cors' ; 
import dotenv from 'dotenv' ;
import errorhandler from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import Hotel from "./routes/hotelRoutes.js";
import auth from './routes/authRoutes.js'
import bodyParser from 'body-parser'
dotenv.config();


connectDB();

const port  = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(errorhandler)

//middlewares

app.use('/api/auth' , auth)

app.use('/api/hotel' , Hotel)


app.listen(port , ()=>{
    console.log(`connected with PORT number ${port}`);
})