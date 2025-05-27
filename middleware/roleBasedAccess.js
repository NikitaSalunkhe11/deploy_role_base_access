const validateRole = (...roles)=>{
    return (req, res, next)=>{
        try {
            if(!roles.includes(req.user.role)){
                res.status(403).json({message:"Access denied"});
            }
            next();
        } catch (error) {
            console.log("Access denied in verify role middleware");
            res.status(500).json({message:error.message});
        }
    }
}

module.exports = validateRole;