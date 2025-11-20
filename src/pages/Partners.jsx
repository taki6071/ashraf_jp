import smbc from "../photo/bank/smbc.png";
import ufj from "../photo/bank/ufj.png";
import ecl from "../photo/bank/ecl.png";
import seven from "../photo/bank/seven.png";
import nyk from "../photo/bank/nyk.png";

function Partners() {
  return (
    <div className="w-[90%] max-w-[900px] mx-auto mt-8 bg-white p-6 md:p-8 rounded-xl shadow-lg shadow-amber-400">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-[#0b3d91] mb-3">
        Our Business Partners
      </h1>
      <p className="text-[16px] leading-7 mt-2 text-gray-700">
        We collaborate with trusted banking and shipping partners to ensure
        smooth operations and global delivery.
      </p>

      {/* Company Overview */}
      <h2 className="text-2xl font-semibold text-[#0b3d91] mt-15">
        Banking Partners
      </h2>
      <div class="text-[16px] leading-7 mt-4 text-black-700 rounded-xl text-center font-semibold grid grid-cols-2 ">
          <a href="https://www.smbc.co.jp/global/" target="_blank">
            <div className="w-full h-50 sm:h-60 md:h-50 overflow-hidden rounded-lg shadow-lg p-3 shadow-blue-500">
            <img src={smbc} alt="" className="w-full h-20 object-contain" />
            <p className="mt-3">Mitsui Sumitomo Banking Corporation</p>
          </div>
          </a>
          <a href="https://www.bk.mufg.jp/global/">
            <div className="w-full h-50 sm:h-60 md:h-50 overflow-hidden rounded-lg shadow-lg p-3 shadow-blue-500">
            <img src={ufj} alt="" className="w-full h-20 object-contain" />
            <p className="mt-3">Mitsubishi UFJ Bank</p>
          </div>
          </a>
      </div>

      {/* Mission */}
      <h2 className="text-2xl font-semibold text-[#0b3d91] mt-12">
        Shipping Partners
      </h2>
      <div class="text-[16px] leading-7 mt-4 text-black-700 rounded-xl text-center font-semibold grid grid-cols-2">
          <a href="https://www.ecl.co.jp/" target="_blank">
            <div className="w-full h-50 sm:h-60 md:h-50 overflow-hidden rounded-lg shadow-lg p-3 shadow-blue-500">
            <img src={ecl} alt="" className="w-full h-20 object-contain" />
            <p className="mt-3">ECL - Eastern Car Liner</p>
          </div>
          </a>
          <a href="https://seven-seals.com/en/">
            <div className="w-full h-50 sm:h-60 md:h-50 overflow-hidden rounded-lg shadow-lg p-3 shadow-blue-500">
            <img src={seven} alt="" className="w-full h-20 object-contain" />
            <p className="mt-3">Seven Seals</p>
          </div>
          </a>
          <a href="https://www.nyk.com/english/">
            <div className="w-full h-50 sm:h-60 md:h-50 overflow-hidden rounded-lg shadow-lg p-3 shadow-blue-500">
            <img src={nyk} alt="" className="w-full h-20 object-contain" />
            <p className="mt-3">NYK</p>
          </div>
          </a>
      </div>
    </div>
  );
}

export default Partners;
