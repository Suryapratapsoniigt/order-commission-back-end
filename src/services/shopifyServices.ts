import fs from 'fs';
import path from 'path';
import OrderModel from '../models/order';
import { calculateCommission } from './commissionService';
import { Order } from '../types/common.type';

// Path to the mock data file
const MOCK_DATA_PATH = path.join(__dirname, '../data/mockOrders.json');

export async function fetchAndStoreOrders(): Promise<void> {
  try {
    // Read data from the mock JSON file
    const data = fs.readFileSync(MOCK_DATA_PATH, 'utf-8');
    const orders: Order[] = JSON.parse(data);

    // Calculate commission and store in DB
    for (const order of orders) {
      var orderId = order.id;

      const ordersIsExist = await OrderModel.findOne({id: orderId} );

      if (ordersIsExist) {
        await OrderModel.findOneAndUpdate(
          { id: order.id },
          { ...order }
        );
      } else {
        const commission = calculateCommission(order);
        const newOrder = new OrderModel({ ...order, commissionInDollars: commission });
        await newOrder.save();
      }
      
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching data from JSON file: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while fetching data');
    }
  }
}


export async function getOrdersAndCommissions() {
  try {
    await fetchAndStoreOrders();
    const orders = await OrderModel.find({}, {
      id: 1,
      orderDate: 1,
      customerName: 1,
      attributedStaffName: 1,
      total: 1,
      commissionInDollars: 1
    });

    return orders;

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching data from JSON file: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while fetching data');
    }
  }
}