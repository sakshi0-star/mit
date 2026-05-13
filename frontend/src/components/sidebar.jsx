import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">ERP System</h1>

      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/crm">CRM</Link>
        <Link to="/sales">Sales</Link>
        <Link to="/manufacturing">Manufacturing</Link>
        <Link to="/inventory">Inventory</Link>
      </nav>
    </div>
  );
}

export default Sidebar;