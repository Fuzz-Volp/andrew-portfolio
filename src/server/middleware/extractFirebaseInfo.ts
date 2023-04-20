import logging from "../config/logging";
import firebaseAdmin from "firebase-admin";
import { Request, Response, NextFunction } from "express";

const extractFirebaseInfo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info("Validatating Token ...");

  let token = req.header("Authorization")?.replace("Bearer ", "");

  if (token) {
    firebaseAdmin
      .auth()
      ._verifyAuthBlockingToken(token)
      .then((result) => {
        if (result) {
          res.locals.firebase = result;
          res.locals.fire_token = token;
          next();
        } else {
          logging.warn("Token Invalid");

          return res.status(401).json({
            message: "Unauthorized",
          });
        }
      })
      .catch((error) => {
        logging.error(error);

        return res.status(401).json({
          error,
          message: "Unauthorized",
        });
      });
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

export default extractFirebaseInfo;
