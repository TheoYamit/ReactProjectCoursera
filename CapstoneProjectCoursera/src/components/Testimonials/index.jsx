import React from 'react';
import './testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import testimonialOne from '../../assets/testimonial1.jpg';
import testimonialTwo from '../../assets/testimonial2.jpg';
import testimonialThree from '../../assets/testimonial3.jpg';
import testimonialFour from '../../assets/testimonial4.jpg';

import {
  Text, Flex, Box, VStack, HStack,
  useBreakpointValue, Grid, GridItem, Image
} from '@chakra-ui/react';

const Testimonials = () => {

  const testimonialsChange = useBreakpointValue({
    base: 'repeat(2, 1fr)',
    lg: 'repeat(4, 1fr)'
  })
  return (
    <>
      <Box className='testimonials-box' paddingBottom='70px'>
        <Text align='center' fontSize='3xl' paddingTop='70px' paddingBottom='70px'> Testimonials</Text>

        <Grid templateColumns={testimonialsChange} gap={6}>
          <GridItem backgroundColor='rgba(239, 239, 240, 0.9)' borderRadius='10px'>
            <Box padding='10px'>
              <VStack align='stretch' spacing={4}>
                <Text textAlign='center' fontSize='2xl'> Jessica Jane </Text>
                
                <Flex justifyContent='center'>
                  <Image className='testimonial-image-size' src={testimonialOne}/>
                </Flex>

                <HStack justifyContent='center'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </HStack>
               
                <Text textAlign='center' fontFamily='proximanova regular'> 
                I went to this restauraunt last weekend with my boyfriend. The food was amazing
                and was one of the best experiences I've ever had.
                </Text>
              </VStack>
            </Box>
          </GridItem>
          <GridItem backgroundColor='rgba(239, 239, 240, 0.9)' borderRadius='10px'>
            <Box padding='10px'>
              <VStack align='stretch' spacing={4}>
                <Text textAlign='center' fontSize='2xl'> Damian Smith </Text>
                
                <Flex justifyContent='center'>
                  <Image className='testimonial-image-size' src={testimonialTwo}/>
                </Flex>

                <HStack justifyContent='center'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </HStack>
               
                <Text textAlign='center' fontFamily='proximanova regular'> 
                I visited this restaurant last night with my family. The dishes were fantastic, and the service was top-notch, making it a truly unforgettable dining experience.
                </Text>
              </VStack>
            </Box>
          </GridItem>
          <GridItem backgroundColor='rgba(239, 239, 240, 0.9)' borderRadius='10px'>
            <Box padding='10px'>
              <VStack align='stretch' spacing={4}>
                <Text textAlign='center' fontSize='2xl'> Victor Brown </Text>
                
                <Flex justifyContent='center'>
                  <Image className='testimonial-image-size' src={testimonialThree}/>
                </Flex>

                <HStack justifyContent='center'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </HStack>
               
                <Text textAlign='center' fontFamily='proximanova regular'> 
                  I dined here with friends, and it was incredible. The flavors were exquisite, and the atmosphere made it one of the most memorable meals I've ever enjoyed.
                </Text>
              </VStack>
            </Box>
          </GridItem>
          <GridItem backgroundColor='rgba(239, 239, 240, 0.9)' borderRadius='10px'>
            <Box padding='10px'>
              <VStack align='stretch' spacing={4}>
                <Text textAlign='center' fontSize='2xl'> Amelia Wilson </Text>
                
                <Flex justifyContent='center'>
                  <Image className='testimonial-image-size' src={testimonialFour}/>
                </Flex>

                <HStack justifyContent='center'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </HStack>
               
                <Text textAlign='center' fontFamily='proximanova regular'> 
                  I had dinner here with colleagues, and it was exceptional. The food was delightful, and the ambiance made it a standout evening I’ll always remember.
                </Text>
              </VStack>
            </Box>
          </GridItem>
          
        </Grid>
      </Box>
    </>
  );
};

export default Testimonials;