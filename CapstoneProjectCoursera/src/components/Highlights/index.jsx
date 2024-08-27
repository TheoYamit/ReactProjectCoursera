import React from 'react';
import './highlights.css';
import { Text, Grid, GridItem, useBreakpointValue,
  Flex, HStack, VStack, Box, Image, Button, Spacer } from '@chakra-ui/react';

import greekSalad from '../../assets/greek-salad.jpg';
import bruschetta from '../../assets/bruschetta.jpg';

const Highlights = ({ specialsRef }) => {
  const gridChange = useBreakpointValue({
    base: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)'
  })

  const spacingChange = useBreakpointValue({
    base: '151px',
    lg: '122px'
  })

  return (
    <>
      <Box className='highlights-box' ref={specialsRef}>
        <Flex justifyContent='space-between'>
          <Text fontSize='3xl'> Specials </Text>
          <Button size='lg' backgroundColor='rgba(60, 60, 60, 0.9)' color="white"> Online Menu </Button>
        </Flex>

        <Grid templateColumns={gridChange} paddingTop='20px'gap={6}>
          <GridItem backgroundColor='rgba(239, 239, 240, 0.9)' borderRadius='10px'>
            <VStack align='stretch'>
              <Image className='image-same-size' borderTopLeftRadius='10px' borderTopRightRadius='10px' src={greekSalad}/>
              <Flex padding='10px' justifyContent='space-between' alignItems='center' width='100%'>
                <Text fontSize='2xl'> Greek Salad </Text>
                <Text> $12.99 </Text>
              </Flex>
              <Text fontFamily='proximanova regular' padding='10px'>
                A Greek salad is a refreshing mix of crisp cucumbers, juicy tomatoes, red onions, Kalamata olives, and feta cheese, all tossed in a light vinaigrette. It's a perfect blend of fresh flavors, bringing a taste of the Mediterranean to your table.
              </Text>
              <Text paddingTop='10px' padding='10px'> Order a delivery </Text>
            </VStack>
          </GridItem>
          
          <GridItem backgroundColor='rgba(239, 239, 240, 0.9)' borderRadius='10px'>
            <VStack align='stretch'>
              <Image className='image-same-size' borderTopLeftRadius='10px' borderTopRightRadius='10px' src={bruschetta}/>
              <Flex padding='10px' justifyContent='space-between' alignItems='center' width='100%'>
                <Text fontSize='2xl'> Bruschetta </Text>
                <Text> $5.99 </Text>
              </Flex>
              <Text fontFamily='proximanova regular' padding='10px'>
              Bruschetta features toasted bread topped with a delicious mix of diced tomatoes, fresh basil, garlic, and a drizzle of olive oil. This classic Italian appetizer is bursting with flavor, offering a perfect balance of freshness and crunch in every bite.
              </Text>
              <Text paddingTop='10px' padding='10px'> Order a delivery </Text>
            </VStack>
          </GridItem>

          <GridItem backgroundColor='rgba(239, 239, 240, 0.9)' borderRadius='10px'>
            <VStack align='stretch'>
              <Image className='image-same-size' borderTopLeftRadius='10px' borderTopRightRadius='10px' src={bruschetta}/>
              <Flex padding='10px' justifyContent='space-between' alignItems='center' width='100%'>
                <Text fontSize='2xl'> Lemon Dessert </Text>
                <Text> $4.99 </Text>
              </Flex>
              <Text fontFamily='proximanova regular' padding='10px'>
                A Greek salad is a refreshing mix of crisp cucumbers, juicy tomatoes, red onions, Kalamata olives, and feta cheese, all tossed in a light vinaigrette. It's a perfect blend of fresh flavors, bringing a taste of the Mediterranean to your table.
              </Text>
              <Text paddingTop='10px' padding='10px'> Order a delivery </Text>
            </VStack>
          </GridItem>

          
        </Grid>
      </Box>
    </>
  );


}

export default Highlights;