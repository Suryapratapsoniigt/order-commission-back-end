import dotenv from 'dotenv';
import appInstance from './app';
import { environments } from './configuration/envConfig';
import { dbConnection } from "./configuration/databaseConnection"
import { startCronJob } from './utils/cronJob';

// configure environment
dotenv.config()


// start server
async function startServer(){
    try {

        // Make connection with database
        await dbConnection();

        startCronJob();

        // call app instance to start the server
        appInstance().listen(environments.PORT, () =>{
            console.log(`Server is running on http://localhost:${environments.PORT}`)
        })
    } catch (error) {
        console.log('Getting error to run the server : ', error)
        process.exit(1)
    }
}

startServer()

