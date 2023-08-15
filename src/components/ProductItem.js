import React from 'react';

const ProductItem = ({ title, price, link }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600">${price}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Buy Now
      </a>
    </div>
  );
};

export default ProductItem;