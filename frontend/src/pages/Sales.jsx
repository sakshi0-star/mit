import { useEffect, useState } from "react";
import axios from "axios";

function Sales() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/sales-orders")
      .then((res) => {
        setOrders(res.data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Sales Orders
      </h1>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Client</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.order_id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{order.order_id}</td>

                <td className="p-4">{order.client}</td>

                <td className="p-4">{order.product}</td>

                <td className="p-4">{order.quantity}</td>

                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sales;