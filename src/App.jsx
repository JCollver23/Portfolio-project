import { Outlet } from 'react-router-dom';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';

import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Footer from './Components/Footer';


function App() {

  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    setCurrentPage("Home");
  }, []);

  return (
    <div className="app_container">

      <NavBar />

      <Outlet context = {{currentPage, setCurrentPage}}/>
      <Footer />
    </div>
  );
}


<navBar />

export default App;