import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminLogged");
    navigate("/admin-login");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Upload Car Images */}
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-3">Upload Car Image</h2>
          <input type="file" accept="image/*" className="border p-2 w-full" />
        </div>

        {/* Edit Brand Info */}
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-3">Edit Brand Information</h2>
          <input
            type="text"
            placeholder="Enter Title"
            className="border p-2 w-full mb-3"
          />
          <textarea
            placeholder="Enter Description"
            className="border p-2 w-full"
          ></textarea>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
