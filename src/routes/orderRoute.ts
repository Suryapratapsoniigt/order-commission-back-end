import { Router } from 'express';
import  { getCommissions }  from '../controllers/orderController';

const router = Router();

router.get('/order-commission', getCommissions)

export default router;