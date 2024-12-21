import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './db.js';
import bookRoutes from './routes/bookRoutes.js';
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

connectDb();

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to backend')
})

app.use('/books',bookRoutes);
app.use('/users',userRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log('server is running')
})