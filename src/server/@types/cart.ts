import { Document } from "mongoose";
import ILineItem from "./lineItem";

export default interface ICart extends Document {
  lineItem: ILineItem[];
  isPaid: boolean;
  totalPrice: number;
  totalQty: number;
  orderId: string;
  addItemToCart(productId: string): Promise<ICart>;
  setItemQty(productId: string): Promise<ICart>;
}
