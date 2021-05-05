import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'
// routes
import bookRoutes from './routes/books.js';

// dotenv
dotenv.config({ path: './config/config.env' });

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// CORS Middleware
app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

const conn = await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(`Mongo connection at ${conn.connection.host}`);
if (conn) {
    app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)) 
}

mongoose.set('useFindAndModify', false);

// use routes
app.use('/api/books', bookRoutes);
