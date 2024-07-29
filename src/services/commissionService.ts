import { Order } from '../types/common.type'

export function calculateCommission(order: Order): number {
    const date = new Date(order.orderDate);
    const day = date.getDay();
    const total = order.total;
    const items = order.items;
    
    let commission = 0;
  
    if (day === 5 || day === 6) { // Friday or Saturday
      // Calculate item-based commission
      const itemCommission = items.length * 10; // $10 per item
      commission = itemCommission <= 50 ? itemCommission : 0;
      
      // Add percentage-based commission if item commission exceeds $50
      if (itemCommission > 50) {
        commission += total * 0.03;
      }
    } else {
      // Weekday orders
      const hour = date.getHours();
      if (hour >= 20) {
        commission = total <= 100 ? total * 0.03 : 100 * 0.03 + (total - 100) * 0.05;
      } else {
        commission = total * 0.03;
      }
    }
  
    return commission;
}