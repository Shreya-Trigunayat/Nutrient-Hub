import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className="flex justify-around items-center py-4 font-sans " style={{ backgroundColor: '#FAF3E1'}}>
    <h1 className="text-4xl font-bold ">
      <Link to="/" style={{color: '#384C06'}}>NutrientHub</Link>
    </h1>
  </nav>
);

export default Navbar;
