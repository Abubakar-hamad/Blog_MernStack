import jwt from "jsonwebtoken";
import  createError  from "../middleware/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.status(403)
    throw new Error ( "You are not authenticated!")
  }

  jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if (err) {
       res.status(403)
       throw new Error ( err); 
      }    
req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res ,  () => {
    console.log(req.user , 555);
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(401)
      throw new Error ( "u ar no authrize"); 
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res ,  () => {
    console.log(req.user , 555);
    if ( req.user.isAdmin) {
      next();
    } else {
      res.status(401)
      throw new Error ( "u ar no authrize"); 
    }
  });
};