import express  from "express";
import { getUser ,registerUser , loginUser } from "../controllers/authControllers.js";
import protect from "../middleware/authMiddlewara.js";

const router = express.Router();

router.post('/register' , registerUser)
router.post('/login' , loginUser)
router.get('/me' , getUser , protect)



export default router


