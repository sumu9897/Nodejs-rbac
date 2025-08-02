import express from "express"
import dotenv from "dotenv"
import  {dbConnect}  from "./config/dbConnect.js";

dotenv.config()

const app = express();


// Connect to DB
dbConnect();
// Middleware
app.use(express.json())


// Routes



// Start the server

const port = process.env.PORT || 7002;
app.listen(port, () => {
    console.log(`Server is Running at port ${port}`);
    
})
