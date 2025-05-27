const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 5000;

//build-in middleware
app.use(express.json());

//custom middleware
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use("/api",  (req, res)=>{
    res.status(404).send({message:"Page not found", error}); 
});

app.get("/", (req, res)=>{
    try {
        res.status(200).send(" get api for demo In Role Based Access project ");
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.listen(PORT, ()=>{
    console.log(`server is listening on PORT ${PORT}`);
    dbConnect(); 
});