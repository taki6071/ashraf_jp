import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import About from "./pages/About";
import Products from "./pages/Products";
import BrandPage from "./pages/BrandPage";
import Services from "./pages/Services";
import Partners from "./pages/Partners";
import Contacts from "./pages/Contacts";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUpload from "./pages/AdminUpload";
import AdminAddCar from "./pages/AdminAddCar";
import AdminEditCars from "./pages/AdminEditCars";
import CarDetails from "./pages/CarDetails";

// import contacts from "./pages/contacts";
// import partners from "./pages/partners";
// import products from "./pages/products";
// import services from "./pages/services";

function ProtectedRoute({ children }) {
  const isLogged = localStorage.getItem("adminLogged") === "true";
  return isLogged ? children : <Navigate to="/admin-login" />;
}

function App() {
  return (
    <div>
      <Navbar />

      <div className="pt-18">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:brand" element={<BrandPage />} />
          <Route path="/products/:brand/:id" element={<CarDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route path="/admin-login" element={<AdminLogin />} />

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/add-car"
            element={
              <ProtectedRoute>
                <AdminAddCar />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/edit-cars"
            element={
              <ProtectedRoute>
                <AdminEditCars />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      {/* <Features /> */}
      <Footer />
    </div>
  );
}

export default App;
