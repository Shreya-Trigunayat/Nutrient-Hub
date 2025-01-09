import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductList from '../components/ProductList';
import Loader from '../components/Loader';

const HomePage = () => {
  const { products, setCategory, setSearchTerm, setPage, page, loading, setSortOrder, filteredAndSortedProducts, categories } = useContext(ProductContext);
  const [query, setQuery] = useState('');

  // Handle search term submission
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };

  return (
    <div className="container mx-auto z-10 relative">
      {/* Search bar */}
      <form onSubmit={handleSearch} className="mb-4 lg:pl-[25vw] md:pl-[30vw] pl-0">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products by name"
          className="border p-2 w-[70vw] pl-4 lg:w-[30vw] md:w-[30vw] rounded-xl"
        />
        <button 
          type="submit" 
          className="mt-2 p-2 rounded-xl ml-1 transition-all ease-in-out duration-200 font-bold"
          style={{ backgroundColor: '#384C06', color: '#fff', hover: { backgroundColor: '#FF5F00' } }}
        >
          Search
        </button>
      </form>

      <div className="lg:flex md:flex grid justify-around align-middle" >
        {/* Category filter */}
        <select onChange={(e) => setCategory(e.target.value)} className="border mb-2 p-2 text-center rounded-xl text-gray-800 cursor-pointer">
          <option value="">Select a category</option>
          {categories.length > 0 ? categories.map((category) => (
            <option key={category.name} value={category.name}>{category.name}</option>
          )) : (
            <option disabled>No categories available</option>
          )}
        </select>

        {/* Sorting Buttons */}
        <div className="mb-3 flex">
          <button 
            onClick={() => setSortOrder('name-asc')} 
            className="mr-2 text-white py-1 px-1 lg:px-2 rounded font-bold"
            style={{ backgroundColor: '#A7AF3A', transition: 'all 0.2s ease-in-out', hover: { backgroundColor: '#E89F8E' }}}
          >
            Name A-Z
          </button>
          <button 
            onClick={() => setSortOrder('name-desc')} 
            className="mr-2 text-white py-1 px-1 lg:px-2 rounded font-bold"
            style={{ backgroundColor: '#A7AF3A', transition: 'all 0.2s ease-in-out', hover: { backgroundColor: '#E89F8E' }}}
          >
            Name Z-A
          </button>
          <button 
            onClick={() => setSortOrder('nutrition-asc')} 
            className="mr-2 text-white py-1 px-1 lg:px-2 rounded font-bold"
            style={{ backgroundColor: '#A7AF3A', transition: 'all 0.2s ease-in-out', hover: { backgroundColor: '#E89F8E' }}}
          >
            Nutrition ↑
          </button>
          <button 
            onClick={() => setSortOrder('nutrition-desc')} 
            className="mr-2 text-white py-1 px-1 lg:px-2 rounded font-bold"
            style={{ backgroundColor: '#A7AF3A', transition: 'all 0.2s ease-in-out', hover: { backgroundColor: '#E89F8E' }}}
          >
            Nutrition ↓
          </button>
        </div>
      </div>

      {/* Product List */}
      {loading && page === 1 ? <Loader /> : <ProductList products={filteredAndSortedProducts()} />}

      {/* Load More button: only display if not loading */}
      {!loading && products.length > 0 && (
        <div className="text-center mt-4">
          <button 
            onClick={() => setPage(prevPage => prevPage + 1)} 
            className="text-white font-bold py-2 px-4 rounded"
            style={{ backgroundColor: '#A7AF3A' }}
          >
            {loading && page > 1 ? <Loader /> : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;

 