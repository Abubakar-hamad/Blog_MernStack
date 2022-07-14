import express ,{json}  from "express";
import { getUser ,registerUser , loginUser } from "../controllers/authControllers.js";
const router = express.Router();

router.get('/' , getUser)
router.post('/register' , registerUser)
router.post('/login' , loginUser)



export default router


