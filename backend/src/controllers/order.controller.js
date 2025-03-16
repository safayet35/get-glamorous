import Order from "../models/order.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
const createOrder = asyncHandler(async (req, res) => {
  console.log("ordered");
  const {
    name,
    number,
    product,
    price,
    location,
    policeStation,
    district,
    total
  } = req.body;

  if (
    !name ||
    !number ||
    !product ||
    !price ||
    !location ||
    !district ||
    !total
  ) {
    throw new ApiError(401, "All fields are required");
  }

  const order = await Order.create({
    name,
    number,
    product,
    price,
    location,
    district,
    total,
    policeStation
  });

  return res
    .status(200)
    .json(new ApiResponse(200, { order }, "Your order created successfully"));
});

const getOrder = asyncHandler(async (req, res) => {
  const allOrder = await Order.find({});

  return res.status(200).json(new ApiResponse(200, { allOrder }, "All orders"));
});

const markAsCompleted = asyncHandler(async (req, res) => {
  const id = req.query.id;

  if (!id) {
    throw new ApiError(401, "Invalid query ");
  }

  const singleOrder = await Order.findById(id);

  const isCompleted = singleOrder.isComplete;
  
  const order = await Order.findByIdAndUpdate(
    id,
    {
      $set: {
        isComplete: !isCompleted
      }
    },
    { new: true }
  );
  
  res.status(200).json(new ApiResponse(200, {}, "marked"));
});

export { createOrder, getOrder, markAsCompleted };
