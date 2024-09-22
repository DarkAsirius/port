import React, { useState, useEffect } from 'react';
import Footer from "./components/blocks/Footer";
import Header from "./components/blocks/Header";
import Banner from "./components/blocks/Banner";
import Cards from "./components/blocks/Cards";
import About from './components/blocks/About';
import "../src/global.css";

function App() {

  return (
    <div className='App'>
        <>
          <Header />
          <Banner />
          <Cards />
          <About />
          <Footer />
        </>
    </div>
  );
}

export default App;
