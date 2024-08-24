import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Highlights from '../../components/Highlights';
import Testimonials from '../../components/Testimonials';
import About from '../../components/About';

const Home = () => {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
    </>
  )
}

export default Home;