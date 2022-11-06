import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import HomeCarousel from './components/HomeCarousel';

function App() {
  return (
    <div>
      <nav>
        <NavBar/>
      </nav>
      <br/>
      <br/>
      <br/>
      <main>
        <HomeCarousel/>
      </main>
    </div>
  );
}

export default App;
