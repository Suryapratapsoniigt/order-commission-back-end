import { Schema, model } from 'mongoose';
import { Item, Order } from 'types/common.type';

const itemSchema = new Schema<Item>({
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true }
});
  
const orderSchema = new Schema<Order>({
    id: { type: String, required: true },
    orderDate: { type: Date, required: true },
    customerName: { type: String, required: true },
    attributedStaffName: { type: String, required: true },
    total: { type: Number, required: true },
    items: { type: [itemSchema], required: true },
    commissionInDollars: { type: Number, required: true }
});

export default model('Order', orderSchema);