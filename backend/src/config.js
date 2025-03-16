import dotenv from "dotenv";
dotenv.config();

const _config = {
  port: process.env.PORT,
  mongodb_uri: process.env.DATABASE_URI,
  cors_origin: process.env.CORS_ORIGIN,
  
};

export default _config;
