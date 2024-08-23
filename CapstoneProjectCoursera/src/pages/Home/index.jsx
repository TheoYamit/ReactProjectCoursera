import React from 'react';
import Navbar from '../../components/Navbar';
import About from '../../components/HomeComponents/About';
import Hero from '../../components/Hero';
import Highlights from '../../components/Highlights';
import Testimonials from '../../components/Testimonials';

const Home = () => {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Testimonials/>
    </>
  )
}

export default Home;