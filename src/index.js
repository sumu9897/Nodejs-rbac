import express from "express"
import dotenv from "dotenv"
import  {dbConnect}  from "./config/dbConnect.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config()

const app = express();


// Connect to DB
dbConnect();
// Middleware
app.use(express.json())


// Routes

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

// Start the server

const port = process.env.PORT || 7002;
app.listen(port, () => {
    console.log(`Server is Running at port ${port}`);
    
})
