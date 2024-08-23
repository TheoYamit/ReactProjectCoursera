import React from 'react';
import './hero.css'
import { HStack, VStack, Box, Text, Image, Button, Spacer } from '@chakra-ui/react';
import heroImage from '../../assets/hero.jpg';

const Hero = () => {

  return (
    <>
      <Box className="hero-main-box" w="100%" backgroundColor="rgb(180, 180, 180, 0.5)">
        <HStack>
          <VStack align="start">
            <Text fontSize="5xl">Little Lemon</Text>
            <Text fontSize="2xl"> Chicago </Text>
            <Text fontSize="2xl" fontFamily='proximanova regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna odio. Nam fringilla tellus ut justo bibendum tempor.</Text>
            <Spacer/>
            
            <Button size="lg" backgroundColor="rgba(60, 60, 60, 0.9)" color="white"> Reserve a Table </Button>
          </VStack>
          <Box>
            <Image src={heroImage}/>
          </Box>
        </HStack>
      </Box>
    </>
  )
}

export default Hero;