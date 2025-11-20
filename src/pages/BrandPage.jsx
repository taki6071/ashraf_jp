import { useParams } from "react-router-dom";
import { brandData } from "../data/brands";
import { useState } from "react";

function BrandPage() {
  const { brand } = useParams();
  const info = brandData[brand.toLowerCase()];
  const [selectedBody, setSelectedBody] = useState(info?.bodyTypes?.[0] || "");
  const cars = info?.cars || []; // default empty array

  if (!info) {
    return <h1 className="text-center text-3xl mt-10">Brand Not Found</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-blue-700">{info.title}</h1>
      <p className="mt-4">{info.description}</p>

      {/* Body Type Dropdown */}
      {info.bodyTypes && (
        <div className="mt-6">
          <label className="mr-3 font-semibold">Select Body Type:</label>
          <select
            value={selectedBody}
            onChange={(e) => setSelectedBody(e.target.value)}
            className="border rounded px-3 py-2"
          >
            {info.bodyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Images */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
        {info.cars.map((car, idx) => (
          
          <div key={idx} className="w-full h-75 sm:h-60 md:h-75 overflow-hidden rounded-lg shadow-lg bg-gray-300 p-6 ">
            <img
            src={car.image}
            alt={`${brand} ${idx + 1}`}
            className="w-full h-50 object-contain"
          />
          <p className="font-semibold text-center">{car.model}</p>
          <p>Milage : {car.mileage}</p>
          <p>Price :{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandPage;
