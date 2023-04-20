import { Request, Response, NextFunction, response } from "express";
import logging from "../../config/logging";
import Admin from "../../models/Admin";
import mongoose from "mongoose";

const validate = (req: Request, res: Response, next: NextFunction) => {
  logging.info("Token Validated, returning Admin");

  let firebase = res.locals.firebase;
  return Admin.findOne({ uid: firebase.uid })
    .then((admin) => {
      if (admin) {
        return res.status(200).json({ admin });
      } else {
        return res.status(401).json({
          message: "user not found",
        });
      }
    })
    .catch((error) => {
      logging.error(error);
      return res.status(500).json({
        error,
      });
    });
};

const create = (req: Request, res: Response, next: NextFunction) => {
  logging.info("Attemptin to register admin");

  let { uid, name } = req.body;
  let fire_token = res.locals.fire_token;

  const admin = new Admin({
    _id: new mongoose.Types.ObjectId(),
    uid,
    name,
  });

  return admin
    .save()
    .then((newAdmin) => {
      logging.info(`New user ${uid} created ...`);
      return res.status(201).json({ admin: newAdmin, fire_token });
    })
    .catch((error) => {
      logging.error(error);
      res.status(500).json({
        error,
      });
    });
};

const login = (req: Request, res: Response, next: NextFunction) => {
  logging.info("logging in user ...");

  let { uid } = req.body;
  let fire_token = res.locals.fire_token;

  return Admin.findOne({ uid })
    .then((admin) => {
      if (admin) {
        logging.info(`Admin ${uid} found, siging in... `);
        return res.status(200).json({ admin, fire_token });
      } else {
        logging.info(`Admin ${uid} not found, register...`);
        return create(req, res, next);
      }
    })
    .catch((error) => {
      logging.error(error);
      res.status(500).json({
        error,
      });
    });
};

const read = (req: Request, res: Response, next: NextFunction) => {
  const _id = req.params.adminID;
  logging.info(`Incoming read for ${_id} ....`);

  return Admin.findById(_id)
    .then((admin) => {
      if (admin) {
        return res.status(200).json({ admin });
      } else {
        return res.status(404).json({ message: "Not Found" });
      }
    })
    .catch((error) => {
      logging.error(error);
      res.status(500).json({
        error,
      });
    });
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
  const _id = req.params.adminID;
  logging.info(`Incoming read for all ....`);

  return Admin.find()
    .exec()
    .then((admins) => {
      return res.status(200).json({
        count: admins.length,
        admins,
      });
    })
    .catch((error) => {
      logging.error(error);
      res.status(500).json({
        error,
      });
    });
};

export default {
  validate,
  create,
  login,
  read,
  readAll,
};
