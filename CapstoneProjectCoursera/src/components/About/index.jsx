import React from 'react';
import './about.css';
import { Image, Flex, Box, Text, HStack, VStack,
  useBreakpointValue, Spacer } from '@chakra-ui/react';
import aboutOne from '../../assets/about1.jpg';
import aboutTwo from '../../assets/about2.jpg';


const About = () => {

  const imageSize = useBreakpointValue({
    base: '200px',
    lg: '350px'
  })

  return (
    <>
      <Box w='100%' className='about-padding'>
        <HStack>
          <VStack align='start' w='50%'>
            <Text fontSize='5xl'>Little Lemon</Text>
            <Text fontSize='2xl'> Chicago </Text>
            <Text fontFamily='proximanova regular'>Little Lemon, located in Chicago, is a charming restaurant specializing in Mediterranean cuisine. We offer a delightful array of dishes
              inspired by the vibrant flavors of the Mediterranean, featuring fresh ingredients and traditional recipes. At Little Lemon, we create a warm
              and inviting dining experience, where every meal feels like a sunny escape to the Mediterranean coast. Join us to enjoy a taste of the Mediterranean
              right in the heart of Chicago. </Text>
          </VStack>
          <Box position='static' align='center'>
            <Image w={imageSize} src={aboutOne} className='image-size first-pic'></Image>
            <Image w={imageSize} src={aboutTwo} className='image-size second-pic'></Image>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default About;