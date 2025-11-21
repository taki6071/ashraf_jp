function About() {
  return (
    <div className="w-[90%] max-w-[900px] mx-auto mt-8 bg-white p-6 md:p-8 rounded-xl shadow-lg shadow-amber-400">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-[#0b3d91] mb-3">About Us</h1>

      {/* Company Overview */}
      <h2 className="text-2xl font-semibold text-[#0b3d91] mt-6">
        Company Overview
      </h2>
      <p className="text-[16px] leading-7 mt-2 text-gray-700">
        Ashraf Company Ltd. is a trusted supplier of high-quality reconditioned
        vehicles to clients worldwide. With years of experience in the
        automobile export industry, we specialize in sourcing, inspecting, and
        shipping vehicles from Japan and other global markets.
      </p>

      <p className="text-[16px] leading-7 mt-4 text-gray-700">
        Currently, we supply reconditioned cars to clients in the UK, UAE, and
        Bangladesh and are also expanding our reach to new markets around the
        world. Our commitment to quality, transparency, and timely delivery has
        earned us a reputation as a reliable partner for automobile importers.
      </p>

      {/* Mission */}
      <h2 className="text-2xl font-semibold text-[#0b3d91] mt-8">Mission</h2>
      <p className="text-[16px] leading-7 mt-2 text-gray-700">
        To ensure safe, comfortable, and affordable road journeys around the
        world by delivering premium-quality reconditioned vehicles. We remain
        committed to honesty, integrity, and transparency in all aspects of our
        business.
      </p>

      <h2 className="text-2xl font-semibold text-[#0b3d91] mt-8">
        Key Highlights
      </h2>
      <div class="text-[16px] leading-7 mt-4 text-gray-700 bg-yellow-100 p-10 rounded-xl">
        <ul>
          <li>
            <strong>Experience:</strong> 8+ years in exporting Japanese
            reconditioned cars.
          </li>
          <li>
            <strong>Markets Served:</strong> UK, UAE, Bangladesh, and other
            regions.
          </li>
          <li>
            <strong>Annual Sales:</strong> ~USD 12 million and steadily growing.
          </li>
          <li>
            <strong>Inventory:</strong> Wide selection of Toyota, Nissan, Honda,
            Mazda, Mitsubishi, and more.
          </li>
          <li>
            <strong>Documentation Expertise:</strong> LC, BL, and full export
            paperwork handled in-house.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-[#0b3d91] mt-8">Why Choose Us</h2>
      <div class="text-[16px] leading-7 mt-4 text-gray-700 bg-yellow-100 p-10 rounded-xl">
        <ul>
          <li>
            <strong>Wide Network:</strong> Access to all major vehicle auctions
            and suppliers in Japan and other countries.
          </li>
          <li>
            <strong>Quality Assurance:</strong> Each vehicle undergoes strict
            inspection before shipment.
          </li>
          <li>
            <strong>Competitive Pricing:</strong> We offer the best deals on
            high-quality reconditioned vehicles.
          </li>
          <li>
            <strong>Global Shipping:</strong> We deliver to multiple
            destinations worldwide with reliable logistics partners.
          </li>
          <li>
            <strong>Reliable Logistics:</strong> Smooth shipping and timely
            delivery to ports worldwide.
          </li>
          <li>
            <strong>Customer-Centric Service:</strong> Tailored solutions and a
            dedicated support team.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
