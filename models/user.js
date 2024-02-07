import mongoose from "mongoose";

const userschema  = mongoose.Schema(
    {
        userName:{
            typeof: String,
            require: true,
            unique: true
        },
        
    }
)