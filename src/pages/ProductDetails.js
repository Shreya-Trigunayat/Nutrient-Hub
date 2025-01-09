import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

const ProductDetails = () => {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
      setProduct(response.data.product);
    };

    fetchProductDetails();
  }, [barcode]);

  return (
    <div className=" lg:mt-18  z-10 md:mt-15 mt-10 lg:flex  p-4 lg:p-10 gap-10 justify-center align-middle border rounded-xl" style={{ backgroundColor: '#FAF3E1'}}>
      {product ? (
        <>
          <img src={product.image_url} alt={product.product_name} className="w-[40vw] h-64 object-cover" />
          <div className='flex flex-col gap-4'>
          <h1 className="text-2xl mt-1">{product.product_name}</h1>
          <p>{product.ingredients_text}</p>
          <ul>
          <li>Energy: {product.nutriments['energy-kcal']} kcal</li>
        <li>Fat: {product.nutriments['fat']} g</li>
        <li>Carbohydrates: {product.nutriments['carbohydrates']} g</li>
        <li>Proteins: {product.nutriments['proteins']} g</li>
          </ul>
          <p>Nutrition: {product.nutriments.energy} kcal</p>
          
          </div>
        </>
      ) : <Loader/>}
    </div>
    
  );
};

export default ProductDetails;
