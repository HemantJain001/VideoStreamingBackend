import dotenv from 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import connectDB from './db/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors);
app.use()

connectDB();







// (async ()=>{
//     try {
//         // Connect to MongoDB
//         const MONGO_URI = process.env.MONGO_URI;
//         await mongoose.connect(`${MONGO_URI}/${DB_NAME}`); 
//         console.log('Connected to MongoDB');

//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// })()