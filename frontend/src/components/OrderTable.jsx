import Button from "./Button.jsx";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { markAsComplete } from "../api/ordersApi.js";
import { toast } from "react-toastify";
const OrderTable = ({ item }) => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: id => markAsComplete(id),
    onMutate: async id => {
      await queryClient.cancelQueries({ queryKey: ["orders"] });

      const previousOrders = queryClient.getQueryData(["orders"]);
      return { previousOrders };
    },
    onSuccess: () => {
      toast.success("updated");
    },
    // 🔥 Rollback on error
    onError: (error, variables, context) => {
      toast("failed to updated");
      queryClient.setQueryData(["orders"], context.previousOrders);
    },
    // ✅ Refetch from backend after mutation

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    }
  });
  const handleUpdate = id => {
    updateMutation.mutate(id);
  };

  return (
    <div className="p-4 space-y-4">
      <div
        className={`${
          item.isComplete ? "bg-sky-400" : null
        } border-primary rounded-lg shadow-md p-4 bg-white`}
      >
        <table className="table w-full table-zebra">
          <tbody>
            <tr className="bg-gray-800 text-white">
              <th className="p-2">Name</th>
              <td className="p-2">{item.name}</td>
            </tr>
            <tr>
              <th className="p-2">Number</th>
              <td className="p-2">{item.number}</td>
            </tr>
            <tr>
              <th className="p-2">Product</th>
              <td className="p-2">{item.product}</td>
            </tr>
            <tr>
              <th className="p-2">Location</th>
              <td className="p-2">{item.location}</td>
            </tr>
          </tbody>
        </table>

        <table className="table w-full table-zebra mt-2">
          <tbody>
            <tr className="bg-gray-800 text-white">
              <th className="p-2">Police</th>
              <td className="p-2">{item.policeStation}</td>
            </tr>
            <tr>
              <th className="p-2">District</th>
              <td className="p-2">{item.district}</td>
            </tr>
            <tr>
              <th className="p-2">Price</th>
              <td className="p-2">{item.price}</td>
            </tr>
            <tr>
              <th className="p-2">Total</th>
              <td className="p-2">{item.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex w-full justify-start">
        <Link>
          <Button
            onClick={() => handleUpdate(item._id)}
            style={`${
              item.isComplete ? "bg-green-600 border-green-500" : "bg-primary"
            }`}
          >
            {item.isComplete ? "Completed" : "incomplete "}
            {updateMutation.isPending ? (
              <span className="text-2xl loading loading-spinner text-white"></span>
            ) : null}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderTable;
