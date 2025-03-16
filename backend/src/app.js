import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import _config from "./config.js";
const app = express();

app.use(express.static("public"));
app.use(cookieParser());

app.use(
  express.urlencoded({
    limit: "14kb",
    extended: true
  })
);
app.use(
  express.json({
    limit: "14kb"
  })
);
app.use(
  cors({
    origin: _config.cors_origin,
    credentials: true,
    
  })
);

// all routes goes here
import orderRouter from "./routes/order.routes.js";

app.use("/api/v1/order", orderRouter);
export default app;
