import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Button, Flex } from '@chakra-ui/react';

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex flexDirection='column' padding={5} justifyContent='center' alignItems='center'>
        <Text fontSize='6xl'> Reservation successful. Thank you for booking. </Text>
        <Text fontFamily='proximanova regular'> Press this button to return to Little Lemon Website</Text>
        <Button onClick={() => navigate('/')} marginTop={5}>Little Lemon</Button>
      </Flex>
      
    </>
  );
};

export default ConfirmedBooking;