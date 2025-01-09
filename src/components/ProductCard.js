import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const truncateText = (text) => {
    return text.split(' ').slice(0, 10).join(' ') + '...';
  };

  return (
    <Link to={`/product/${product.id}`} className="border mt-10 rounded-xl  bg-slate-100 p-4 hover:box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); hover:scale-110 transition-transform ease-in-out duration-300" style={{ backgroundColor: '#E8E187'}}>
      <img src={product.image_url ? product.image_url : 'https://www.shutterstock.com/shutterstock/photos/2155242945/display_1500/stock-vector-image-coming-soon-no-photo-no-thumbnail-image-available-missing-picture-icon-vector-illustration-2155242945.jpg'} alt={product.product_name} className="w-full h-32 object-cover" />
      <h2 className="text-lg text-center font-bold">{product.product_name}</h2>
      <p className=' font-medium text-sm'>{truncateText(product.ingredients_text || '')}</p>
      <p className='font-medium text-sm'>Nutrition Grade:<span className=' bg-purple-100 font-semibold p-1 rounded-sm '>{product.nutrition_grades}</span></p>
    </Link>
  );
};

export default ProductCard;
