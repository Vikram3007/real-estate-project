// src/components/HomePropertiesSlider.jsx
import React, { useState } from "react";

const chennaiAreas = [
  "Velachery", "T Nagar", "Adyar", "Anna Nagar", "Guindy",
  "Mylapore", "Thiruvanmiyur", "Royapettah", "Nungambakkam", "Egmore",
  "Kodambakkam", "Kotturpuram", "Besant Nagar", "Perambur", "Chromepet",
  "Medavakkam", "Pallavaram", "Tambaram", "Vadapalani", "Alwarpet",
  "Alandur", "Saidapet", "Chetpet", "Ashok Nagar", "Kilpauk",
  "Porur", "Guindy Industrial", "Saligramam", "Koyambedu", "Purasawalkam",
  "Vepery", "K.K. Nagar", "Sholinganallur", "Thousand Lights", "Nungambakkam East"
];

// Generate 35 sample properties with 3 images each
const generateProperties = () => {
  let properties = [];
  let id = 1;

  const imgSets = [
    ["/house1.jpg", "/house2.jpg", "/house3.jpg"],
    ["/house2.jpg", "/house3.jpg", "/house1.jpg"],
    ["/house3.jpg", "/house1.jpg", "/house2.jpg"],
    ["/pg1.jpg", "/pg2.jpg", "/pg3.jpg"],
    ["/pg2.jpg", "/pg3.jpg", "/pg1.jpg"]
  ];

  for (let i = 0; i < 35; i++) {
    let type = i < 15 ? "Sale" : i < 25 ? "Rent" : "PG";
    properties.push({
      id: id++,
      title: `${type} Property in ${chennaiAreas[i]}`,
      price: type === "Sale" ? `₹ ${50 + i} L` : `₹ ${5 + i}k / month`,
      area: type === "PG" ? "Shared / Single" : `${1000 + i * 30} sqft`,
      type: type,
      images: imgSets[i % imgSets.length],
      description: `Beautiful property located in ${chennaiAreas[i]}. Perfect for living or investment.`,
    });
  }

  return properties;
};

const HomeCliclk2 = () => {
  const [properties] = useState(generateProperties());
  const [searchArea, setSearchArea] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const filteredProperties = properties.filter((p) =>
    p.title.toLowerCase().includes(searchArea.toLowerCase())
  );

  const nextImage = () => {
    if (!selectedProperty) return;
    setImgIndex((prev) => (prev + 1) % selectedProperty.images.length);
  };

  const prevImage = () => {
    if (!selectedProperty) return;
    setImgIndex((prev) => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Properties in Chennai</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by area..."
        className="border p-2 rounded w-full mb-6"
        value={searchArea}
        onChange={(e) => setSearchArea(e.target.value)}
      />

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="border rounded shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
            onClick={() => {
              setSelectedProperty(property);
              setImgIndex(0);
            }}
          >
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl">{property.title}</h2>
              <p className="text-gray-600">{property.price}</p>
              <p className="text-gray-500 text-sm">
                {property.type} | {property.area}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white w-full max-w-3xl p-6 rounded-lg relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold"
              onClick={() => setSelectedProperty(null)}
            >
              ×
            </button>

            {/* Image Slider */}
            <div className="relative">
              <img
                src={selectedProperty.images[imgIndex]}
                alt={selectedProperty.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              >
                ›
              </button>
            </div>

            <h2 className="text-2xl font-bold">{selectedProperty.title}</h2>
            <p className="text-gray-600">{selectedProperty.price}</p>
            <p className="text-gray-500">
              {selectedProperty.type} | {selectedProperty.area}
            </p>
            <p className="mt-4">{selectedProperty.description}</p>

            {/* Future Enhancement Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Book Appointment
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Save Favorite
              </button>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
                Filter & Sort
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Admin Panel
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Payment Integration
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeCliclk2;
