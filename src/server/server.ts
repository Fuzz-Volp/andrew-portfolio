import http from "http";
import express, { Application, Request, Response } from "express";
import { connectDB } from "./config/db";
import logging from "./config/logging";
import config from "./config/config";
import firebaseAdmin from "firebase-admin";
import adminRoutes from "./routes/api/AdminRoutes";
import art from "./routes/api/ArtRoutes";

connectDB();

const router = express();

/** Server Handling */
const httpServer = http.createServer(router);

/** Connect to Firebase Admin */
let serverAccounKey = require("./config/serviceAccountKey.json");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serverAccounKey),
});

/**  Logging Middleware */
router.use((req, res, next) => {
  logging.info(
    `METHOD: '${req.method}' - URL: '${req.url}' - IP: '${req.socket.remoteAddress}' `
  );

  res.on("finish", () => {
    logging.info(
      `METHOD: '${req.method}' - URL: '${req.url} - IP: '${req.socket.remoteAddress}' STATUS: '${res.statusCode}' `
    );
  });

  next();
});

/** Parse the Body */
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/** API Access Policies */
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});

/** Routes */
router.use("/admins", adminRoutes);

/** Error Handling */
router.use((req, res, next) => {
  const error = new Error("not found");

  return res.status(404).json({
    message: error.message,
  });
});

/** Listen for Requests */
httpServer.listen(config.server.port, () => {
  logging.info(
    `Server is running at ${config.server.host}:${config.server.port} ...`
  );
});
