import { Document } from "mongoose";
import IGamePage from "./gamePage";
import ICategory from "./category";
import IUser from "./users";

export default interface IProduct extends Document {
  id?: string;
  user: IUser;
  title: string;
  description: string;
  img: string;
  page?: IGamePage;
  originalPrice: number;
  printPrice: number;
  category: ICategory;
}
