import React from 'react';
import { Text, Button, Flex } from '@chakra-ui/react';

const ConfirmedBooking = () => {
  return (
    <>
      <Flex flexDirection='column' padding={5} justifyContent='center' alignItems='center'>
        <Text fontSize='6xl'> Reservation successful. Thank you for booking. </Text>
        <Text fontFamily='proximanova regular'> Press this button to return to Little Lemon Website</Text>
        <Button marginTop={5}>Little Lemon</Button>
      </Flex>
      
    </>
  );
};

export default ConfirmedBooking;