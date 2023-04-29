import { Schema, Types, model } from "mongoose";
import ICategory from "../@types/category";

const ObjectId = Types.ObjectId;

const categorySchema = new Schema({
  name: { type: String, required: true },
});

export default model<ICategory>("Cat", categorySchema);
