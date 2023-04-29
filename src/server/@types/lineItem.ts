import { Document } from "mongoose";
import IProduct from "./product";

export default interface ILineItem extends Document {
  qty: number;
  product: IProduct;
  extPrice: number;
}
