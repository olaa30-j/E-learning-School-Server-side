import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Load environment variables from .env file.
dotenv.config();

// Create our app
const app = express();


app.use(cors());

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log("success connection")
})