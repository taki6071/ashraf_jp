import { useParams } from "react-router-dom";
import { brandData } from "../data/brands";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { db } from "../firebase/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

function BrandPage() {
  const { brand } = useParams();
  const info = brandData[brand.toLowerCase()];
  const [selectedBody, setSelectedBody] = useState(info?.bodyTypes?.[0] || "");
  // const cars = info?.cars || []; // default empty array
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "vehicles"), where("brand", "==", brand));

    const unsub = onSnapshot(q, (snap) => {
      setVehicles(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, [brand]);

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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {vehicles.map((v) => {
          // ⭐ Cloudinary Optimization
          const optimizedUrl = v.imageUrl.replace(
            "/upload/",
            "/upload/f_auto,q_auto,w_auto/"
          );

          return (
            <div key={v.id} className="border rounded p-3 shadow">
              <Link to={`/products/${v.brand}/${v.id}`}>
                <div>
                  <img
                    src={optimizedUrl}
                    alt={v.model}
                    className="w-full h-48 object-cover rounded"
                    loading="lazy"
                  />
                  <p className="font-bold mt-2">{v.model}</p>
                  <p>
                    <strong>Price:</strong> ${v.price}
                  </p>
                  <p>
                    <strong>Mileage:</strong> {v.mileage} km
                  </p>
                  <p>
                    <strong>Year:</strong> {v.year}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BrandPage;
