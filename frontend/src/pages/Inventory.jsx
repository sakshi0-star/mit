import { useEffect, useState } from "react";
import axios from "axios";

function Inventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/inventory")
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Warehouse Inventory
      </h1>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Stock</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{item.product}</td>

                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {item.stock}
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

export default Inventory;