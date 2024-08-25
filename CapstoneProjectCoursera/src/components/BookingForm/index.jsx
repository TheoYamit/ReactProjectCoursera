import React from 'react';
import './bookingform.css'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Box, 
  Input, Text, Image, HStack, VStack } from '@chakra-ui/react';
import reservedPic from '../../assets/reserved.jpg'
const BookingForm = () => {
  return (
    <>
      <div className='booking-padding-first'>
        <HStack>
          <Image className='image-size' src={reservedPic}/>
          <VStack>
            <Text fontSize='5xl' textAlign='center'> Reserve Your Table Now</Text>
            <Text fontFamily='proximanova regular' textAlign='center'> Fill out the below form to make sure you have your table reserved
              at the best restaurant in Chicago!
            </Text>
          </VStack>
        </HStack>
      </div>

      <Box as='form' className='booking-padding-second'>

      </Box>
    </>
  );
};

export default BookingForm;