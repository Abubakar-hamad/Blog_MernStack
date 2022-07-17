import express from 'express'
import { createRoom, deleteRoom, getRoom, updateRoom } from '../controllers/roomControllers.js';

import { verifyAdmin } from '../middleware/verifyToken.js';
const router = express.Router()


router.get('/' , verifyAdmin,getRoom)
router.post('/:hotelID' ,  verifyAdmin, createRoom) ;
router.put('/:id' ,verifyAdmin, updateRoom)
router.delete('/:id/:hotelID' ,verifyAdmin, deleteRoom)



export default router