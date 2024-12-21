import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI
const connectDb = async ()=>{
    try{
        await mongoose.connect(MONGODB_URI);
        console.log('database connected successfully');
    }
    catch(err){
        console.log('database is not connected',err)
    }
}

export default connectDb;