import { useEffect, useState } from "react";
import { db, storage } from "../firebase/firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

function AdminEditCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "vehicles"), (snap) => {
      setCars(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => unsub();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "vehicles", id));
    alert("Deleted!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Edit Cars</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
        {cars.map((car) => (
          <div key={car.id} className="border p-3 rounded shadow">
            <img src={car.imageUrl} className="w-full h-40 object-cover" />

            <p className="font-bold">{car.brand}</p>
            <p>{car.model}</p>
            <p>${car.price}</p>
            <p>Year: {car.year}</p>

            <button
              onClick={() => handleDelete(car.id)}
              className="w-full mt-2 bg-red-600 text-white py-2 rounded"
            >
              Delete
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminEditCars;
