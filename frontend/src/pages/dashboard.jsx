function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Total Leads</h2>
          <p className="text-3xl mt-4">25</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Sales Orders</h2>
          <p className="text-3xl mt-4">14</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Inventory</h2>
          <p className="text-3xl mt-4">320</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;