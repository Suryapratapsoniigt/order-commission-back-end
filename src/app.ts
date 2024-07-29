
import express, { Express } from 'express';
import cors from 'cors';
import orderRoutes from './routes/orderRoute';

function appInstance(){
    // create app instance
    const app : Express = express()

    // allow cors
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended : false }))

    app.get('/', (req, res) => {
        res.send('Hello world!')
    })


    // Routes
    app.use('/api/orders', orderRoutes);
    

    return app
}

export default appInstance;


