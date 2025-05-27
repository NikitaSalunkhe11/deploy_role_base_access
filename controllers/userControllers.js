const hrDashboard = (req, res)=>{
    try {
        console.log("In HR dashboard");
        res.status(200).send({message:"Welcome to HR dashboard"});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
} 
const adminDashboard = (req, res)=>{
    try {
        console.log("In admin dashboard");
        res.status(200).send({message:"welcome to admin dashboard"});
    } catch (error) {
        res.status(500).send({messgae:error.message});
    }
}
const employeeDashboard = (req, res)=>{
    try {
        console.log("In employee dashboard");
        res.status(200).send({message:"Welcome to Employee dashboard"});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}
module.exports = {hrDashboard, adminDashboard, employeeDashboard};