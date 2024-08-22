import React from 'react';
import './highlights.css';
import { Text, Grid, GridItem, 
  Flex, HStack, VStack, Box, Button, Spacer } from '@chakra-ui/react';

const Highlights = () => {

  return (
    <>
      <Box className='highlights-box'>
        <Flex justifyContent="space-between">
          <Text fontSize="3xl"> Specials </Text>
          <Button size="lg" backgroundColor="rgba(60, 60, 60, 0.9)" color="white"> Online Menu </Button>
        </Flex>

        <Grid templateColumns='repeat(3, 1fr)' paddingTop='20px'gap={6}>
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>
      </Box>
    </>
  );


}

export default Highlights;