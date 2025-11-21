import React from "react";
import { useState, useEffect, useRef } from "react";
import img1 from "../photo/slide1.jpg";
import img2 from "../photo/slide2.jpg";
import img3 from "../photo/slide3.jpg";

const images = [img1, img2, img3];

function Hero() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const startX = useRef(0);
  const endX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = startX.current - endX.current;

    if (diff > 50) nextSlide(); // Swipe LEFT → Next
    if (diff < -50) prevSlide(); // Swipe RIGHT → Prev
  };

  return (
    <div>
      <div
        className="relative w-full h-[200px] sm:h-[330px] md:h-[550px] overflow-hidden shadow-2xl shadow-amber-300 mt-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* IMAGE SLIDER */}
        <div
          className="flex h-full transition-transform duration-1000 "
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="w-full h-full shrink-0 bg-center bg-no-repeat bg-green-600 bg-contain"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover" // or object-contain
              />
            </div>
          ))}
          <div className="w-full absolute top-1/2 -translate-y-1/2 text-white">
            <h1 className="text-xl md:text-5xl font-bold drop-shadow-lg bg-black/30 pl-7 md:pl-18 pt-45 pb-50">
              Your Trusted Global
              <br />
              Partner for Quality
              <br /> Reconditioned Vehicles
              <br /> from Japan
            </h1>
            {/* <p className="text-lg md:text-2xl mt-4 drop-shadow-lg">
                Some subtitle or description here
              </p> */}
          </div>
        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 sm:left-5 -translate-y-1/2 hidden sm:block
            p-2 sm:p-3 md:p-4 rounded-full bg-gray-600/30 backdrop-blur-sm 
            text-black hover:bg-gray-600/50 transition"
        >
          ❮
        </button>
        <button
          onClick={prevSlide}
          className="hidden  absolute top-1/2 left-4 -translate-y-1/2 sm:hidden
                   bg-gray-400/40 rounded-full text-black px-4 py-6 border-2 border-gray-400"
        >
          ❮
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 sm:right-5 -translate-y-1/2 hidden sm:block
            p-2 sm:p-3 md:p-4 rounded-full bg-gray-600/30 backdrop-blur-sm 
            text-black hover:bg-gray-600/50 transition"
        >
          ❯
        </button>

        <button
          onClick={nextSlide}
          className="hidden  absolute top-1/2 right-4 -translate-y-1/2 sm:hidden
                   bg-gray-400/40 rounded-full text-black px-4 py-6 border-2 border-gray-400"
        >
          ❯
        </button>

        {/* DOTS */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 sm:w-6 h-1.5 rounded-full transition 
              ${index === i ? "bg-white" : "bg-black"}`}
            ></button>
          ))}
        </div>
      </div>
      <div className="mt-5 h-[200px] bg-white shadow-2xl shadow-amber-300">
        <h1 className="text-xl font-semibold pl-5">Latest In Stock</h1>
        <hr />
      </div>
      <div className="mt-5 h-[200px] bg-white shadow-2xl shadow-amber-300">
        <h1 className="text-xl font-semibold pl-5">Hot Deal !!</h1>
        <hr />
      </div>
    </div>
  );
}

export default Hero;
