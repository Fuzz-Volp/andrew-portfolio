import { Schema, model } from "mongoose";
import IAdmin from "../interfaces/admin";

const AdminSchema: Schema = new Schema({
  uid: { type: String, unique: true },
  name: { type: String },
});

export default model<IAdmin>("Admin", AdminSchema);
