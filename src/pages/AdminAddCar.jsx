import { useState } from "react";
import { db, storage } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";

function AdminAddCar() {
  const [brand, setBrand] = useState("audi");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Select an image!");

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "unsigned_upload");
    formData.append("cloud_name", "dt3pssy5l");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dt3pssy5l/image/upload",
        formData
      );
      const imageUrl = res.data.secure_url;

      // Now save everything to Firestore
      await addDoc(collection(db, "vehicles"), {
        brand,
        model,
        price: Number(price),
        mileage: Number(mileage),
        year,
        imageUrl,
      });

      alert("Car added successfully!");
      setModel("");
      setPrice("");
      setMileage("");
      setYear("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Car</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Brand</label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="toyota">Toyota</option>
            <option value="nissan">Nissan</option>
            <option value="lexus">Lexus</option>
            <option value="honda">Honda</option>
            <option value="mazda">Mazda</option>
            <option value="subaru">Subaru</option>
            <option value="suzuki">Suzuki</option>
            <option value="rover">Land Rover</option>
            <option value="porche">Porche</option>
            <option value="lamborghini">Lamborghini</option>
            <option value="bmw">BMW</option>
            <option value="mercedes">Mercedes-Benz</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <label>Model</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Price</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Mileage</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Year</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Car Image</label>
          <input
            type="file"
            className="w-full border p-2 rounded"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        <button className="w-full py-3 bg-blue-600 text-white rounded-lg transition duration-300 hover:bg-blue-700">
          Add Car
        </button>
      </form>
    </div>
  );
}

export default AdminAddCar;
