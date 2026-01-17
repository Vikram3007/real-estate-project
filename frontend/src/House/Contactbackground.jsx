import React from "react";
import HomeDetiles5 from "./HomeDetiles5";

const Contactbackground = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/contact1.jpg')" }}
      >
        <div className="flex items-center justify-end h-full bg-black/60 px-6 md:px-20">
          <div className="text-right text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact</h1>
            <p className="text-lg opacity-90">
              We are here to help you find the right property
            </p>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-20 py-12 bg-gray-50">
        
        {/* LEFT: Enquiry Form */}
        <section className="w-full md:w-1/2 bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">
            What we can help you with
          </h2>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Our team will contact you shortly.");
            }}
          >
            {/* Enquiry Type */}
            <div>
              <label className="block font-medium mb-1">
                Select Enquiry Type
              </label>
              <select
                className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">-- Please Select --</option>
                <option>Buy Property</option>
                <option>Sell Property</option>
                <option>Rent</option>
                <option>Other</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block font-medium mb-1">Mobile</label>
              <input
                type="tel"
                className="w-full border rounded px-4 py-2"
                placeholder="Enter mobile number"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email ID</label>
              <input
                type="email"
                className="w-full border rounded px-4 py-2"
                placeholder="Enter email address"
                required
              />
            </div>

            {/* Consent */}
            <div className="flex items-start gap-2">
              <input type="checkbox" required className="mt-1" />
              <p className="text-sm text-gray-600">
                I authorise <strong>Pincode Pillars</strong> to contact me via
                Email / SMS / Call. This overrides DND.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Submit Enquiry
            </button>
          </form>
        </section>

        {/* RIGHT: Contact Info */}
        <section className="w-full md:w-1/2 space-y-6">
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Interested in a project? Let’s talk
            </h2>

            <div className="mb-4">
              <h3 className="font-bold">Headquarters</h3>
              <p className="text-gray-700 mt-1">
                No.2, 1st Floor, KVIC Nagar,<br />
                Velachery Rd, next to KTM Showroom,<br />
                Gowrivakkam, Chennai - 600073
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Phone</h3>
              <a
                href="tel:+919884855955"
                className="text-blue-600 underline"
              >
                +91 98848 55555
              </a>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Corporate Office</h3>
              <p>Monday – Saturday</p>
              <p>09:30 AM – 06:30 PM</p>
            </div>

            <div>
              <h3 className="font-bold">Site Office</h3>
              <p>All Days</p>
              <p>10:00 AM – 07:00 PM</p>
            </div>
          </div>
        </section>
      </div>

      {/* Google Map Embed */}
      <div className="mt-5">
        <iframe
          title="Pincode Pillars Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0739309782634!2d80.19125527487255!3d12.93137888737933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fc6c171cfa7%3A0xc08f6b4e2213f6a7!2sGowrivakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600073!5e0!3m2!1sen!2sin!4v1682412345678!5m2!1sen!2sin"
          width="100%"
          height="250"
          allowFullScreen=""
          loading="lazy"
          className="rounded border"
        ></iframe>
      </div>

      {/* Footer */}
      <HomeDetiles5 />
    </>
  );
};

export default Contactbackground;
