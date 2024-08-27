import React, { useRef } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Highlights from '../../components/Highlights';
import Testimonials from '../../components/Testimonials';
import About from '../../components/About';
import Footer from '../../components/Footer';

const Home = () => {

  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const specialsRef = useRef(null);
  const scrollToSpecials = () => {
    if (specialsRef.current) {
      specialsRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }


  return (
    <>
      <Navbar scrollToAbout={scrollToAbout} scrollToSpecials={scrollToSpecials}/>
      <Hero/>
      <Highlights specialsRef={specialsRef}/>
      <Testimonials/>
      <About aboutRef={aboutRef}/>
      <Footer/>
    </>
  )
}

export default Home;