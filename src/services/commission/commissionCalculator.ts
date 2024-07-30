

import { Order } from '../../types/common.type';
import { ruleRegistry } from './registry';

// Function for calculating the commission
export function calculateCommission(order: Order): number {
  for (const [condition, rule] of ruleRegistry.entries()) {
    if (condition(order)) {
      return rule.calculate(order);
    }
  }
  throw new Error('No commission rule matched');
}