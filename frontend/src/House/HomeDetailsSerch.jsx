import React from 'react';

const properties = [
  { id: 1, title: 'Apartment in T Nagar', area: 'T Nagar', type: 'Buy', img: '/house1.jpg' },
  { id: 2, title: 'Villa in Velachery', area: 'Velachery', type: 'Buy', img: '/house2.jpg' },
  { id: 3, title: 'Flat in Anna Nagar', area: 'Anna Nagar', type: 'Rent', img: '/house3.jpg' },
  { id: 4, title: 'House in Adyar', area: 'Adyar', type: 'Rent', img: '/house4.jpg' },
  { id: 5, title: 'Apartment in KK Nagar', area: 'KK Nagar', type: 'Buy', img: '/house5.jpg' },
  { id: 6, title: 'Villa in Tambaram', area: 'Tambaram', type: 'Buy', img: '/house6.jpg' },
  { id: 7, title: 'Flat in Porur', area: 'Porur', type: 'Rent', img: '/house7.jpg' },
  { id: 8, title: 'House in OMR', area: 'OMR', type: 'Rent', img: '/house8.jpg' },
  { id: 9, title: 'Apartment in Medavakkam', area: 'Medavakkam', type: 'Buy', img: '/house9.jpg' },
  { id: 10, title: 'Villa in Pallikaranai', area: 'Pallikaranai', type: 'Buy', img: '/house10.jpg' },

  // 👉 ipdi 35 vara add pannalaam (area mattum change)
];

const HomeDetailsSerch = ({ searchText, activeButton }) => {
  if (!searchText) return null;

  const filtered = properties.filter((p) => {
    const areaMatch = p.area.toLowerCase().includes(searchText.toLowerCase());
    const typeMatch = activeButton ? p.type === activeButton : true;
    return areaMatch && typeMatch;
  });

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {filtered.length === 0 ? (
        <p className="col-span-3 text-center text-gray-500">
          No properties found
        </p>
      ) : (
        filtered.map((p) => (
          <div key={p.id} className="border rounded shadow">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-40 object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="font-bold">{p.title}</h3>
              <p>{p.area}</p>
              <p className="text-blue-600">{p.type}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HomeDetailsSerch;
