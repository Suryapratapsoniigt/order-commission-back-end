import { Order } from "../../types/common.type";

// define condition function type
export type Condition = (order: Order) => boolean;

// function for checking weekend condition
export const isWeekend: Condition = (order) => {
  const day = new Date(order.orderDate).getDay();
  return day === 5 || day === 6; // Friday or Saturday
};

// function for checking weekend day night condition
export const isWeekdayNight: Condition = (order) => {
  const date = new Date(order.orderDate);
  return date.getDay() !== 5 && date.getDay() !== 6 && date.getHours() >= 20;
};

// function for checking weekday condition
export const isWeekdayDay: Condition = (order) => {
  const date = new Date(order.orderDate);
  return date.getDay() !== 5 && date.getDay() !== 6 && date.getHours() < 20;
};