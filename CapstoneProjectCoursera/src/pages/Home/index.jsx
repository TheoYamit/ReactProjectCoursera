import React from 'react';
import Navbar from '../../components/Navbar';
import About from '../../components/HomeComponents/About';
import Hero from '../../components/Hero';
import Highlights from '../../components/Highlights';
const Home = () => {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Highlights/>
    </>
  )
}

export default Home;