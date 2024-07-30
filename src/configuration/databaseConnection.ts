import mongoose from "mongoose";
import { environments } from "./envConfig";

// Function to establish DB connection
export async function dbConnection(): Promise<void> {
    // Database connection
    try {
        await mongoose.connect(environments.MONGOOSE_URI)
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Could not connect to MongoDB', err)
        throw err;
    }
}