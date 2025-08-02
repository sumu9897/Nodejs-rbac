import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  role:{
    type: String,
    required: true,
    enum: ["admin", "manager", "user"],
  },
  
},
{
    timestamps: true
  },
);
