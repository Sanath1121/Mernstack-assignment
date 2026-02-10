import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken"
export function verifyToken(err,req,res,next)
{
    //token verification logic
    //get the token from req
    //console.log(req.cookies)
    let signedToken=req.cookies.token;
    if(!signedToken){
        return res.status(401).json({message:"Login first"})
    }
    //verify token(decode)
    let decodedToken= jwt.verify(signedToken,"secret");
    console.log("Decoded token",decodedToken);
    next();
}