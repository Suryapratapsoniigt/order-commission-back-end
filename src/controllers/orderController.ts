import { Request, Response } from 'express';
import { fetchAndStoreOrders, getOrdersAndCommissions } from '../services/shopifyServices';

export const getCommissions = async (req: Request, res: Response): Promise<void> => {
    try {        
        const data = await getOrdersAndCommissions();
        res.json({
            success: true,
            message: '',
            data: data
        });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                success: false,
                message: error.message,
                data: []
            });
          } else {
            res.status(500).json({
                success: false,
                message: 'An unknown error occurred',
                data: []
            });
          }
    }
}
