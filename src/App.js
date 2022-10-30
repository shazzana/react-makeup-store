import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductCategories from './components/ProductCategories';

function App() {
  return (
    <div>
      <NavBar/>
      <br/>
      <br/>
      <br/>
      <ProductCategories/>
    </div>
  );
}

export default App;
