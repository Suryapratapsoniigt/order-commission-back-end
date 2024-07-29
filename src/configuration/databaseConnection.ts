const mongoose =  require('mongoose');

// Function to establish DB connection
export async function dbConnection(): Promise<void> {
    // Database connection
    return  mongoose.connect(process.env.MONGOOSE_URI).then(() => {
            console.log('Connected to MongoDB');
        }).catch((err: Error) => {
            console.error('Could not connect to MongoDB', err)
            throw err;
        });
}