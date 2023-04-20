import { Schema, model, Types } from "mongoose";

const ObjectId = Types.ObjectId;

const ArtSchema = new Schema(
  {
    admin: { ObjectId, required: true },
    title: String,
    description: String,
    art: String,
  },
  {
    timestamps: true,
  }
);

const Art = model("Art", ArtSchema);
export default Art;
