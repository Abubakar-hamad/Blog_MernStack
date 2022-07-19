import express from 'express'
import { createNewHotel, deleteHotel, getHotel ,getHotels, updateHotel , countByCity, countByType} from '../controllers/hotelControllers.js';
import { verifyAdmin } from '../middleware/verifyToken.js';
const router = express.Router()


router.get('/' , getHotels) ;
router.get('/find/:id' , getHotel)
router.get('/countByCity' ,countByCity) ;
router.get('/countByType' ,countByType) ;

router.post('/create' ,  verifyAdmin, createNewHotel) ;
router.put('/:id' ,verifyAdmin, updateHotel)
router.delete('/:id' ,verifyAdmin, deleteHotel)



export default router