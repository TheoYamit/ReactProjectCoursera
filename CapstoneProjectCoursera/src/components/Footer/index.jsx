import React from 'react';
import './footer.css';
import logo from '../../assets/logo-white.png';
import {
  Flex, Text, Image, Box, HStack, VStack
  , Grid, GridItem
} from '@chakra-ui/react';
import { Grow } from '@mui/material';

const Footer = () => {
  return (
    <>


      <Grid templateColumns='repeat(4, 1fr)' gap={3} className='footer-padding'>
        <GridItem>
          <Image className='footer-logo' src={logo} />
        </GridItem>
        
        <GridItem>
          <VStack align='start'>
            <Text color='green'> Doormat Navigation </Text>
            <Text> Home </Text>
            <Text> About</Text>
            <Text> Menu </Text>
            <Text> Reservations </Text>
            <Text> Order Online</Text>
            <Text> Login </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack align='start'>
            <Text color='green'> Contact </Text>
            <Text> 553 Bernhard Vista </Text>
            <Text> 555-555-555</Text>
            <Text> littlelemon@gmail.com</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack align='start'>
            <Text color='green'> Social Media Links</Text>
            <Text> Instagram coming soon... </Text>
            <Text> X (twitter) coming soon...</Text>
          </VStack>
        </GridItem>
      </Grid>


    </>
  );
};

export default Footer;