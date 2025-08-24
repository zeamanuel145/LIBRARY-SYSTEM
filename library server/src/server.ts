import express, {Express,Request,Response} from 'express';
import cors from 'cors';
import {config} from "./config";
import mongoose from 'mongoose';
import {registerRoutes} from './routes';

const PORT=config.server.port;
const app:Express=express();

// Updated CORS configuration
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

(async function startUp() {
    try {
        await mongoose.connect(config.mongo.url, { w: "majority", retryWrites: true, authMechanism: "DEFAULT" });
        console.log("Connected to the database successfully");
        console.log("Connected to MongoDB");
        
        registerRoutes(app);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log("Error connecting to the database:", error);
        process.exit(1);
    }
})();