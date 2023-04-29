import { Schema, model } from "mongoose";
import IUser from "../@types/users";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const SALT_ROUNDS = 8;

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: [true, "Please add your first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please add your last name"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: 8,
      trim: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc: Document, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
  next();
});

export default model<IUser>("User", UserSchema);
