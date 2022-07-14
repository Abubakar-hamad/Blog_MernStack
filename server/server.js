import express  from "express";
import cors from 'cors' ; 
import dotenv from 'dotenv' ;
import connectDB from "./config/db.js";

import auth from './routes/authRoutes.js'

dotenv.config()
connectDB()

const port  = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors())


//middlewares

app.use('/api/auth' , auth)


app.listen(port , ()=>{
    console.log(`connected with PORT number ${port}`);
})