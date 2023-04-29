import http from "http";
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import cors from "cors";
// import favicon from "serve-favicon";
import logging from "./config/logging";
import { connectDB } from "./config/db";
import adminRoutes from "./routes/api/UserRoutes";
import productRoutes from "./routes/api/ProductRoutes";
import categoryRoutes from "./routes/api/CategoryRoutes";
import config from "./config/config";

connectDB();
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

/** Parse the Body */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, "dist", "favicon.ico")));
app.use(express.static(path.join(__dirname, "dist")));

/** Server Handling */
const httpServer = http.createServer(app);

/**  Logging Middleware */
app.use((req, res, next) => {
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

/** API Access Policies */
app.use((req, res, next) => {
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
app.use("/api/admins", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);

// Put API routes here, before the "catch all" route
app.get("/api", (req, res) => {
  res.json({ message: "The API is alive!!!" });
});

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

/** Error Handling */
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Not Found");
  logging.error(error);
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
