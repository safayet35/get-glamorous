import express from "express";
import {
  createOrder,
  getOrder,
  markAsCompleted
} from "../controllers/order.controller.js";
const router = express.Router();

router.post("/create-order", createOrder);
router.get("/get-order", getOrder);
router.put("/mark-completed", markAsCompleted);
export default router;
