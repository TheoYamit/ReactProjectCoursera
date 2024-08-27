import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { Flex, Spacer, Image, Box, Wrap } from '@chakra-ui/react'
import { Text, Button } from '@chakra-ui/react';
import logo from '../../assets/logo.svg'



const Navbar = ({ scrollToAbout, scrollToSpecials }) => {
  const navigate = useNavigate();

  return (
    <>
      <Flex align='center' justifyContent="space-around" className='nav-flex'>
        <Image _hover={{ cursor: 'pointer' }} onClick={() => navigate('/')} className="logo" src={logo} />
        <Text _hover={{ cursor: 'pointer' }} onClick={() => navigate('/')} className="text"> HOME </Text>
        <Text onClick={scrollToAbout} _hover={{ cursor: 'pointer' }} className="text"> ABOUT </Text>
        <Text onClick={scrollToSpecials} _hover={{ cursor: 'pointer'}} className="text"> MENU </Text>
        <Text _hover={{ cursor: 'pointer'}} onClick={() => navigate('/Booking')} className="text"> RESERVATIONS </Text>
        <Text className="text"> ORDER ONLINE </Text>
        <Text className="text"> LOGIN </Text>
      </Flex>
    </>
  );
}

export default Navbar;