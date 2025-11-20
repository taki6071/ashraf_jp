import img1 from "../photo/brand_pic/audi.png";
import img2 from "../photo/brand_pic/benz.png";
import img3 from "../photo/brand_pic/bmw.png";
import img4 from "../photo/brand_pic/honda.png";
import img5 from "../photo/brand_pic/lambo.png";
import img6 from "../photo/brand_pic/lexus.png";
import img7 from "../photo/brand_pic/mazda.png";
import img8 from "../photo/brand_pic/nissan.png";
import img9 from "../photo/brand_pic/porche.png";
import img10 from "../photo/brand_pic/rover.png";
import img11 from "../photo/brand_pic/subaru.png";
import img12 from "../photo/brand_pic/suzuki.png";
import img13 from "../photo/brand_pic/toyota.png";
import { Link } from "react-router-dom";

function Products() {
    const brands = [{
      name: "audi",
      image: img1,
    }, {
      name: "benz",
      image: img2,
    }, {
      name: "bmw",
      image: img3,
    }, {
      name: "honda",
      image: img4,
    }, {
      name: "lamborghini",
      image: img5,
    }, {
      name: "lexus",
      image: img6,
    }, {
      name: "mazda",
      image: img7,
    }, {
      name: "nissan",
      image: img8,
    }, {
      name: "porche",
      image: img9,
    }, {
      name: "rover",
      image: img10,
    }, {
      name: "Subaru",
      image: img11,
    }, {
      name: "Suzuki",
      image: img12,
    }, {
      name: "Toyota",
      image: img13,
    }];

  return (
    <div className="w-[90%] max-w-[900px] mx-auto mt-8 bg-white p-6 md:p-8 rounded-xl shadow-lg shadow-amber-400">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-[#0b3d91] mb-3">Product Range</h1>

      <p className="text-[16px] leading-7 mt-2 text-gray-700">
        We offer a comprehensive range of reconditioned vehicles sourced from
        Japan and other countries.
      </p>

      <h2 className="text-2xl font-semibold text-[#0b3d91] mt-6">Brands</h2>

      <p className="text-[16px] leading-7 mt-2 text-gray-700">
        Whether you’re looking for Toyota, Nissan, Honda, Mitsubishi, Suzuki,
        Isuzu or premium brands like BMW, Mercedes-Benz, Audi, or Ford, we can
        source and supply any make and model to meet your needs.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-5 text-center font-semibold pt-9">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            to={`/products/${brand.name}`}
            className="sm:p-2 rounded-lg hover:bg-gray-300 text-center font-semibold capitalize"
          >
            {/* {brand} */}
            <div className="w-full shadow-2xl shadow-blue-500 rounded-lg"><img src={brand.image} alt={brand.name} className="w-full h-30 sm:h-40 p-9 " /><p>{brand.name}</p></div>
          </Link>
        ))}
      </div>

      {/* <div className="w-full h-full grid grid-cols-3 sm:grid-cols-5 text-center font-semibold pt-9">
        <div className="w-full shadow-2xl shadow-amber-300"><img src={img1} alt="" className="w-full h-30 sm:h-40 p-9 " /><p>Audi</p></div>
        <div className="w-full shadow-2xl shadow-amber-300"><img src={img2} alt="" className="w-full h-30 sm:h-40 p-9 " /><p>Mercedes <br /> Benz</p></div>
        <div className="w-full shadow-2xl shadow-amber-300"><img src={img3} alt="" className="w-full h-30 sm:h-40 p-9" /><p>BMW</p></div>
        <div className="w-full shadow-2xl shadow-amber-300"><img src={img4} alt="" className="w-full h-30 sm:h-40 p-9" /><p>Honda</p></div>
        <div className="w-full shadow-2xl shadow-amber-300"><img src={img5} alt="" className="w-full h-30 sm:h-40 p-9" /><p>Lamborghini</p></div>
        <div className="w-full shadow-2xl shadow-amber-300"><img src={img6} alt="" className="w-full h-30 sm:h-40 p-9" /><p>Lexus</p></div>
        <div className="w-full shadow-2xl shadow-amber-300"><img src={img7} alt="" className="w-full h-30 sm:h-40 p-9" /><p>Mazda</p></div>
        <div className="w-full shadow-2xl shadow-amber-300"><img src={img8} alt="" className="w-full h-30 sm:h-40 p-9" /><p>Nissan</p></div>
        <div className="w-full shadow-2xl shadow-amber-300"><img src={img9} alt="" className="w-full h-30 sm:h-40 p-9" /><p>Porche</p></div>
        <div className="w-full shadow-2xl shadow-amber-300"><img src={img10} alt="" className="w-full h-30 sm:h-40 p-9" /><p>Land Rover</p></div>
        <div className="w-full shadow-2xl shadow-amber-300"><img src={img11} alt="" className="w-full h-30 sm:h-40 p-9" /><p>Subaru</p></div>
        <div className="w-full shadow-2xl shadow-amber-300"><img src={img12} alt="" className="w-full h-30 sm:h-40 p-9" /><p>Suzuki</p></div>
        <div className="w-full shadow-2xl shadow-amber-300"><img src={img13} alt="" className="w-full h-30 sm:h-40 p-9" /><p>Toyota</p></div>

      </div> */}
    </div>
  );
}

export default Products;
