import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

async function connectDB() {
    const MONGO_URI = process.env.MONGO_URI ;

    try {
        await mongoose.connect(`${MONGO_URI}/${DB_NAME}`);
        
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default connectDB;