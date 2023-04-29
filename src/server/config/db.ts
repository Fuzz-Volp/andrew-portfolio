import mongoose, { ConnectOptions, connect, connection } from "mongoose";
import config from "./config";
import logging from "./logging";

const NAMESPACE = "MONGO";

/** Mongoose */
export const connectDB = async () => {
  await connect(config.mongo.url, config.mongo.options)
    .then(() => {
      const db = connection;
      logging.info(
        `connected to ${db.name} at ${db.host}: ${db.port}`,
        NAMESPACE
      );
    })
    .catch((error) => {
      logging.error(error.messgage, NAMESPACE);
    });
};
