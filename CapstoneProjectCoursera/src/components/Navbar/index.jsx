import React from 'react';
import './navbar.css';
import { Flex, Spacer, Image, Box, Wrap } from '@chakra-ui/react'
import { Text, Button } from '@chakra-ui/react';
import logo from '../../assets/logo.svg'


const Navbar = () => {

  return (
    <>
      <Flex align='center' justifyContent="space-between" padding="7">
        <Image src={logo} />
        <Wrap>
          <Text fontFamily='proximanova' borderRadius='20px' border='none'> Home </Text>
          <Spacer/>
          <Text className="text"> About </Text>
          <Spacer/>
          <Text className="text"> Menu </Text>
          <Text></Text>
        </Wrap>
          
      </Flex>
    </>
  );
}

export default Navbar;