import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('cereals and their products');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('');
  const [categories, setCategories] = useState([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      let url = `https://world.openfoodfacts.org/products.json?page=${page}`;
      if (category) {
        url = `https://world.openfoodfacts.org/category/${category}.json?page=${page}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    };

    fetchProducts();
  }, [category, page]);

  // Fetch categories from OpenFoodFacts API
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://world.openfoodfacts.org/categories.json');
      const data = await response.json();
      console.log(data); // Check if the data structure is as expected
      setCategories(data.tags); // Assuming tags are structured as needed
    };

    fetchCategories();
  }, []);

  const filteredAndSortedProducts = () => {
    let filteredProducts = products.filter(product =>
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder) {
      switch (sortOrder) {
        case 'name-asc':
          filteredProducts.sort((a, b) => (a.product_name || '').localeCompare(b.product_name || ''));
          break;
        case 'name-desc':
          filteredProducts.sort((a, b) => (b.product_name || '').localeCompare(a.product_name || ''));
          break;
        case 'nutrition-asc':
          filteredProducts.sort((a, b) => (a.nutrition_grades_tags ? a.nutrition_grades_tags[0] : '').localeCompare(b.nutrition_grades_tags ? b.nutrition_grades_tags[0] : ''));
          break;
        case 'nutrition-desc':
          filteredProducts.sort((a, b) => (b.nutrition_grades_tags ? b.nutrition_grades_tags[0] : '').localeCompare(a.nutrition_grades_tags ? a.nutrition_grades_tags[0] : ''));
          break;
        default:
          break;
      }
    }
    return filteredProducts;
  };

  return (
    <ProductContext.Provider value={{
      products,
      setCategory,
      setSearchTerm,
      setPage,
      page,
      loading,
      setSortOrder,
      filteredAndSortedProducts,
      categories, // Added categories to the context
    }}>
      {children}
    </ProductContext.Provider>
  );
};
