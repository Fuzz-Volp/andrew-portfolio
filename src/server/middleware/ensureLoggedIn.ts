import { Request, Response, NextFunction } from "express";
import IUser from "../@types/users";
import logging from "../config/logging";

const NAMESPACE = "Ensure";

export const ensureLoggedIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.params.user;
    if (!user) {
      return next(new Error(`Invalid token or session has expired`));
    }
    next();
  } catch (error: any) {
    logging.error(error, NAMESPACE);
  }
};
