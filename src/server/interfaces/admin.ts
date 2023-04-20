import { Document } from "mongoose";

export default interface IAdmin extends Document {
  uid: string;
  name: string;
}
