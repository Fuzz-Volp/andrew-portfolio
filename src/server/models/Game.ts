import { Schema, model, Types } from "mongoose";
import IGamePage from "../@types/gamePage";
import "./User";

const ObjectId = Types.ObjectId;

export const gamePageSchema = new Schema(
  {
    title: String,
    page: String,
  },
  { timestamps: true }
);

export default model<IGamePage>("Game", gamePageSchema);
