import express from 'express';
import { deleteUser, updateUser  , getUser , getUsers} from '../controllers/userControllers.js';
import { verifyToken  , verifyUser , verifyAdmin} from '../middleware/verifyToken.js';
const router = express.Router();

//allusers
router.get("/users"  , verifyAdmin ,   getUsers)

router.get("/:id" , verifyUser , getUser)
router.put("/:id" , verifyUser , updateUser)
router.delete("/:id" , verifyUser , deleteUser)



export default router