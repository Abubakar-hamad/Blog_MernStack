import express from 'express'
import { createNewHotel, deleteHotel, getHotels, updateHotel } from '../controllers/hotelControllers.js';
import { verifyAdmin } from '../middleware/verifyToken.js';
const router = express.Router()


router.get('/' , verifyAdmin,getHotels)
router.post('/create' ,  verifyAdmin, createNewHotel) ;
router.put('/update/:id' ,verifyAdmin, updateHotel)
router.delete('/delete/:id' ,verifyAdmin, deleteHotel)



export default router