import express from 'express'

const router = express.Router();

// Only admin can accesss this routes
router.get("/admin", (req,res)=>{
    res.json({message: "Welcome Admin"})
})

// Both admin and manager can accesss this routes
router.get("/manager", (req,res)=>{
    res.json({message: "Welcome Manager"})
})

// All can accesss this routes

router.get("/user", (req,res)=>{
    res.json({message: "Welcome User"})
})

export default router;
