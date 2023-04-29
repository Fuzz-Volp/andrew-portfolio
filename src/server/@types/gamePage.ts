import { Document } from "mongoose";
import IUser from "./users";

export default interface IGamePage extends Document {
  title: string;
  page: string;
}
