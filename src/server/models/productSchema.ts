import { Schema, model, Types } from "mongoose";
import "./Game";
import "./Category";
import "./User";
import IProduct from "../@types/product";

const ObjectId = Types.ObjectId;

export const productSchema = new Schema<IProduct>(
  {
    user: { type: ObjectId, ref: "User" },
    title: String,
    description: String,
    img: { type: String },
    page: { type: ObjectId, ref: "Game" },
    category: { type: ObjectId, ref: "Cat" },
    originalPrice: { type: Number, default: 0 },
    printPrice: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);
