
const validateData = (schema)=>{
    return (req, res, next)=>{
        try {
            const {error} = schema.validate(req.body);
            if(error){ 
                return res.status(400).send({error:error});
            }
            next();
        } catch (error) {
            console.log("Error in validateData middleware", error);
            res.status(500).send({error:error.message});
        }
    }
}

module.exports = validateData; 