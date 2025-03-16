import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    product: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    policeStation: {
      type: String,
      default: ""
    },
    district: {
      type: String,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    isComplete:{
       type: Boolean,
       default: false
    }
  },
  { timeStamps: true }
);

const Order = mongoose.model("Order",orderSchema)

export default Order