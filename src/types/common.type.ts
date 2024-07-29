
export interface Item {
    productName: string;
    productPrice: number;
}

export interface Order extends Document {
    id: string,
    orderDate: Date,
    customerName: string,
    attributedStaffName: string,
    total: number,
    items: Item[];
    commissionInDollars: number;
  }