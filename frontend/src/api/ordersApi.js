import axiosInstance from "./axioxInstance.js";

export const fetchOrders = async () => {
  const { data } = await axiosInstance.get("/order/get-order");

  return data;
};

export const postOrder = async formData => {
  const { data } = await axiosInstance.post("/order/create-order", formData);

  return data;
};

export const markAsComplete = async id => {
  const { data } = await axiosInstance.put(`/order/mark-completed?id=${id}`);
  
  return data;
};
