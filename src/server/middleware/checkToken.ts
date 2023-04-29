import { Request, Response, NextFunction } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import logging from "../config/logging";
import config from "../config/config";
import IUser from "../@types/users";
import dotenv from "dotenv";
dotenv.config();

const NAMESPACE = "AUTH";

interface UserAuthRequest extends Request {
  user?: string | object;
}

export const checkToken = async (
  req: UserAuthRequest,
  res: Response,
  next: NextFunction
) => {
  logging.info("Validating Token", NAMESPACE);
  try {
    let token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "invalid token" });
    const decodedToken = jwt.verify(token, config.secret);
    req.body.user = decodedToken;
    logging.info("Token Validated", NAMESPACE);
    next();
  } catch (error) {
    logging.error("Failed to Validate", NAMESPACE);
    return res.status(404).json({
      message: "Failed to Validate",
      error,
    });
  }
};

export const createJWT = (user: IUser) => {
  return jwt.sign({ user }, config.secret, { expiresIn: "24h" });
};
