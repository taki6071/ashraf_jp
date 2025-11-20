// src/Navbar.jsx
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import pogo from "../photo/pogo.png";


function Navbar() {
  const [open, setOpen] = useState(false);

  return (

    <nav className="z-50 fixed top-0 left-0 w-full bg-linear-to-r from-red-400 to-yellow-300 shadow-md px-6 flex justify-between items-center">
      <div>
        <Link to="/"><img src={pogo} alt="" className="w-55 h-22" /></Link>
      </div>
      <ul className="list-reset lg:flex justify-end flex-1 items-center font-semibold hidden md:flex gap-6">
        <li className="mr-0">
          <Link to="/about" class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"> About Us</Link>
        </li>
        <li className="mr-0">
          <Link to="/products" class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"> Our Products</Link>
        </li>
        <li className="mr-0">
          <Link to="/services" class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"> Our Services</Link>
        </li>
        <li className="mr-0">
          <Link to="/partners" class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"> Our Business Partners</Link>
        </li>
        <li class="mr-5">
          <Link to="/contacts" class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"> Contacts</Link>
        </li>
      </ul>

      <button
        className="md:hidden text-3xl text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <ul
        className={`
          ${open ? "block" : "hidden"}
          md:hidden 
          absolute top-22 left-0 w-full 
          bg-gray-600 text-white
          flex flex-col gap-4 p-4 z-50 
        `}
      >
        <li className="mr-3">
          <Link to="/about" class="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4" onClick={() => setOpen(false)}> About Us</Link>
        </li>
        <li className="mr-3">
          <Link to="/products" class="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4" onClick={() => setOpen(false)}> Our Products</Link>
        </li>
        <li className="mr-3">
          <Link to="/services" class="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4" onClick={() => setOpen(false)}> Our Services</Link>
        </li>
        <li className="mr-3">
          <Link to="/partners" class="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4" onClick={() => setOpen(false)}> Our Business Partners</Link>
        </li>
        <li class="mr-3">
          <Link to="/contacts" class="inline-block no-underline hover:text-gray-300 hover:text-underline py-2 px-4" onClick={() => setOpen(false)}> Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
