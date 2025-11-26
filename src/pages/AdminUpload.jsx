import { useParams } from "react-router-dom";
import { useState } from "react";
import { db, storage } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function AdminUpload() {
  const { brand } = useParams();
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

      if (image) {
        const imgRef = ref(storage, `vehicles/${brand}/${image.name}`);
        await uploadBytes(imgRef, image);
        imageUrl = await getDownloadURL(imgRef);
      }

      await addDoc(collection(db, "vehicles"), {
        brand,
        model,
        price: Number(price),
        year: Number(year),
        imageUrl,
        createdAt: Date.now(),
      });

      alert("Vehicle added!");
      setModel("");
      setPrice("");
      setYear("");
      setImage(null);

    } catch (error) {
      console.log(error);
      alert("Upload failed!");
    }

    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold capitalize">
        Upload New Vehicle — {brand}
      </h1>

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Model"
          className="border p-2 w-full"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="border p-2 w-full"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Year"
          className="border p-2 w-full"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <input
          type="file"
          className="border p-2 w-full"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Vehicle"}
        </button>
      </form>
    </div>
  );
}

export default AdminUpload;
