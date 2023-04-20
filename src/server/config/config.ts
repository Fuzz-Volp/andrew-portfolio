import dotenv from "dotenv";
dotenv.config();

const MONGO_USER = process.env.MONGO_USER || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";

const config = {
  mongo: {
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      socketTimeoutMS: 30000,
      keepAlive: true,
      autoIndex: false,
      retryWrites: false,
    },
    url: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.k6nwrgm.mongodb.net/grit`,
  },
  server: {
    host: "localhost",
    port: 5173,
  },
};

export default config;
