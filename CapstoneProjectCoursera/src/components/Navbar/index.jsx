import React from 'react';
import './navbar.css';
import { Flex, Spacer, Image, Box, Wrap } from '@chakra-ui/react'
import { Text, Button } from '@chakra-ui/react';
import logo from '../../assets/logo.svg'


const Navbar = () => {

  return (
    <>
      <Flex align='center' justifyContent="space-around" className='nav-flex'>
        <Image className="logo" src={logo} />
        <Text className="text"> HOME </Text>
        <Text className="text"> ABOUT </Text>
        <Text className="text"> MENU </Text>
        <Text className="text"> RESERVATIONS </Text>
        <Text className="text"> ORDER ONLINE </Text>
        <Text className="text"> LOGIN </Text>
      </Flex>
    </>
  );
}

export default Navbar;