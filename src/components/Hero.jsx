import React from "react";
import { useState, useEffect, useRef } from "react";
import img1 from "../photo/hero2.png";
import img2 from "../photo/port1.jpg";
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
    // <section class="pt-2 bg-linear-to-r from-red-500 to-yellow-300">
    //   <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    //     <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left ">
    //       <h1 class="my-4 text-5xl font-bold leading-tight">
    //         Your Trusted Global Partner for Quality Reconditioned Vehicles
    //       </h1>
    //       <p class="leading-normal text-2xl mb-8">
    //         Premium Reconditioned Vehicles from Japan to Your Doorstep
    //       </p>
    //     </div>

    //     <div class="w-full md:w-3/5 py-6 text-center ">
    //         <img class="w-full md:w-4/5 mx-auto" src="./src/photo/hero.png" />
    //       </div>
    // <div
    //   className="w-full h-[500px] bg-cover bg-center bg-no-repeat transition-all duration-700 bg-amber-400"
    //   style={{ backgroundImage: `url(${images[index]})`,backgroundSize: "50%" }}
    // ></div>
    //   {/* </div>
    // </section> */}
    <div
      className="relative w-full h-[200px] sm:h-[330px] md:h-[550px] overflow-hidden bg-linear-to-r from-red-400 to-yellow-300"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* IMAGE SLIDER */}
      <div
        className="flex h-full transition-transform duration-1200 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="w-full h-full shrink-0 bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "50%",
              transform: "scale(2)",
            }}
          ></div>
        ))}
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
              ${index === i ? "bg-black" : "bg-white/50"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Hero;
