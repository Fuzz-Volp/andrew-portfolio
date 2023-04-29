import { Schema, model, Types } from "mongoose";
import IProduct from "../@types/product";
import { productSchema } from "./productSchema";
import "./Category";
import "./User";

export default model<IProduct>("Product", productSchema);
