
const mongoose = require('mongoose');

const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Database Connected");
    } catch (error) {
        console.log("Error while connecting Database");
    }
}
module.exports = dbConnect;
