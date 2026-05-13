import { useEffect, useState } from "react";
import axios from "axios";

function CRM() {
  const [leads, setLeads] = useState([]);

  // Fetch Leads
  const fetchLeads = () => {
    axios
      .get("http://127.0.0.1:8000/leads")
      .then((res) => {
        setLeads(res.data);
      });
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Create Lead
  const createLead = async () => {
    await axios.post("http://127.0.0.1:8000/leads");

    fetchLeads();
  };

  // Convert Lead
  const convertLead = async (id) => {
    await axios.post(
      `http://127.0.0.1:8000/convert-lead/${id}`
    );

    fetchLeads();

    alert("Lead Converted Successfully");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          CRM Leads
        </h1>

        <button
          onClick={createLead}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl shadow hover:bg-blue-700"
        >
          Add Lead
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{lead.name}</td>

                <td className="p-4">{lead.company}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      lead.status === "Converted"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>

                <td className="p-4">
                  {lead.status !== "Converted" && (
                    <button
                      onClick={() => convertLead(lead.id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    >
                      Convert Lead
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CRM;