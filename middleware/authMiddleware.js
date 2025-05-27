const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next)=>{
    try {
        const tokenBarear = req.headers.authorization;

        if(!tokenBarear ) {
            return res.status(404).send({message:"Token is not provided"});
        }
        const token = tokenBarear.split(" ")[1];

        const decode = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decode;
        console.log("The Decoded User is : ", req.user);
        
        if(!decode) {
            return res.status(409).send({message:"Invalid Token"});
        }
        next();
    } catch (error) {
        console.log("Error in verify Token middleware");
        res.status(500).send({message:error.message});
    }
}

module.exports = verifyToken;