import express from 'express'
import { createNewHotel } from '../controllers/hotelControllers.js';
const router = express.Router()


router.post('/create' , createNewHotel) ;



export default router