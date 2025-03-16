import { useEffect } from "react";
import Button from "../components/Button.jsx";
import { useQuery } from "@tanstack/react-query";
import OrderTable from "../components/OrderTable.jsx";
import { fetchOrders,  } from "../api/ordersApi.js";

const Dashboard = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders
  });

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/";
  };

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="text-7xl loading loading-spinner text-primary"></span>
      </div>
    );

  return (
    <div className="px-3 pt-20">
      <div className="z-10 bg-white top-0 left-0 fixed w-full px-5 py-3 flex items-center justify-between shadow-md">
        <h1 className="text-primary text-2xl font-bold">Dashboard</h1>
        <Button onClick={handleLogout} className="">
          Logout
        </Button>
      </div>
      <h1 className="text-primary font-bangla font-semibold text-4xl text-center">
        All orders
      </h1>
      <div className={` py-4 w-full min-h-fit gap-2`}>
        {data?.data?.allOrder?.map((item, index) => {
          return <OrderTable key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
