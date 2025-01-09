import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import { ProductProvider } from './context/ProductContext';
import Navbar from './components/Navbar';


function App() {
  return (
    <ProductProvider>
        <Router>
          <Navbar />
        
          <div className="container mx-auto p-4" style={{ backgroundColor: '#FAF3E1'}}>
            <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route path="/product/:barcode" element={<ProductDetails/>} />
              
              </Routes>
          </div>
        </Router>
    </ProductProvider>
  );
}

export default App;
