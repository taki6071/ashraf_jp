import img1 from "../photo/brand_pic/audi.png"; //13
import img2 from "../photo/brand_pic/benz.png"; //12
import img3 from "../photo/brand_pic/bmw.png"; //11
import img4 from "../photo/brand_pic/honda.png"; //4
import img5 from "../photo/brand_pic/lambo.png"; //10
import img6 from "../photo/brand_pic/lexus.png"; //3
import img7 from "../photo/brand_pic/mazda.png"; //5
import img8 from "../photo/brand_pic/nissan.png"; //2
import img9 from "../photo/brand_pic/porche.png"; //9
import img10 from "../photo/brand_pic/rover.png"; //8
import img11 from "../photo/brand_pic/subaru.png"; //6
import img12 from "../photo/brand_pic/suzuki.png"; //7
import img13 from "../photo/brand_pic/toyota.png"; //1

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminDashboard() {
  const brands = [
    {
      name: "toyota",
      image: img13,
    },
    {
      name: "nissan",
      image: img8,
    },
    {
      name: "lexus",
      image: img6,
    },
    {
      name: "honda",
      image: img4,
    },
    {
      name: "mazda",
      image: img7,
    },
    {
      name: "subaru",
      image: img11,
    },
    {
      name: "suzuki",
      image: img12,
    },
    {
      name: "rover",
      image: img10,
    },
    {
      name: "porche",
      image: img9,
    },
    {
      name: "lamborghini",
      image: img5,
    },
    {
      name: "bmw",
      image: img3,
    },
    {
      name: "benz",
      image: img2,
    },
    {
      name: "audi",
      image: img1,
    },
  ];
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

      <div className="mt-10 grid grid-cols-1 gap-4 max-w-sm">
        <Link to="/admin/add-car">
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg">
            ➕ Add New Car
          </button>
        </Link>

        <Link to="/admin/edit-cars">
          <button className="w-full py-3 bg-green-600 text-white rounded-lg">
            ✏ Edit Existing Car
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
