import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

function CarDetails() {
  const { brand, id } = useParams(); // 🔥 get brand + car ID
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      const ref = doc(db, "vehicles", id); // 🔥 specific document
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setCar({ id: snap.id, ...snap.data() });
      }

      setLoading(false);
    };

    fetchCar();
  }, [id]);

  if (loading) {
    return <h1 className="text-center text-2xl mt-10">Loading...</h1>;
  }

  if (!car) {
    return <h1 className="text-center text-3xl mt-10">Car Not Found</h1>;
  }

  // ⭐ Cloudinary Auto Optimization
  const optimizedUrl = car.imageUrl.replace(
    "/upload/",
    "/upload/f_auto,q_auto,w_auto/"
  );

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-blue-700">{car.model}</h1>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Car Image */}
        <img
          src={optimizedUrl}
          className="w-full h-80 object-cover rounded shadow"
        />

        {/* Car Info */}
        <div className="border p-6 rounded shadow text-lg">
          <p><strong>Brand:</strong> {car.brand}</p>
          <p><strong>Price:</strong> ${car.price}</p>
          <p><strong>Mileage:</strong> {car.mileage} km</p>
          <p><strong>Year:</strong> {car.year}</p>
          <p><strong>Body Type:</strong> {car.bodyType}</p>
          <p><strong>Description:</strong> {car.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
