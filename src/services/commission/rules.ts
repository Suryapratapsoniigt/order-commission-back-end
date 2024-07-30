import { Order } from "../../types/common.type"

// create based call for commission rule
export abstract class CommissionRule {
    abstract calculate(order: Order): number;
}

// create weekday commission rule class and extend CommissionRule base class
export class WeekdayCommissionRule extends CommissionRule {
    calculate(order: Order): number {
      return order.total * 0.03;
    }
}
  
// create weekday night commission rule class and extend CommissionRule base class
export class WeekdayNightCommissionRule extends CommissionRule {
    calculate(order: Order): number {
      const total = order.total;
      return total <= 100 ? total * 0.03 : 100 * 0.03 + (total - 100) * 0.05;
    }
}

// create weekend commission rule class and extend CommissionRule base class
export class WeekendCommissionRule extends CommissionRule {
    calculate(order: Order): number {
      const itemCommission = order.items.length * 10;
      if (itemCommission > 50) {
        return order.total * 0.03;
      }
      return itemCommission;
    }
}


  