import mongoose, { ConnectOptions, connect, connection } from "mongoose";
import config from "./config";
import logging from "./logging";

/** Mongoose */
export const connectDB = async () => {
  await connect(config.mongo.url, config.mongo.options)
    .then(() => {
      logging.info("mongoose is connected");
    })
    .catch((error) => {
      logging.error(error);
    });
};
