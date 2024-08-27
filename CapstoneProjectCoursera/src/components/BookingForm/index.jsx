import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookingform.css'
import { Flex, FormControl, FormLabel, FormErrorMessage, FormHelperText, Box, 
  Input, Text, Image, HStack, VStack, Button, Select } from '@chakra-ui/react';
import reservedPic from '../../assets/reserved.jpg'

import { submitAPI } from '../../functions/api';
const BookingForm = (props) => {

  const { availableTimes, dispatch } = props;

  const navigate = useNavigate();

  const handleDateChange = (event) => {
    handleInputChange(event);
    const selectedDate = event.target.value;

    dispatch({
      type: 'UPDATE_TIMES',
      payload: selectedDate,
    });
  };

  const [formDetails, setFormDetails] = useState({
    date: null,
    time: null,
    numOfGuests: null,
    ocassion: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    console.log(formDetails)
  }, [formDetails])

  const handleSubmit = (event) => {
    event.preventDefault();
    const isSuccess = submitAPI(formDetails);
    if (isSuccess) {
      navigate('/ConfirmedBooking');
    } else {
      alert('Failed to make a reservation. Please try again.');
    }
  };



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

      <Text paddingTop='100px'textAlign='center' fontSize='5xl'> Reservation Form </Text>

      <Box as='form' className='booking-padding-second'>

        <FormControl paddingBottom={10}>
          <FormLabel> Date </FormLabel>
          <Input onChange={handleDateChange} name='date' type='date'></Input>
        </FormControl>

        <FormControl paddingBottom={10}>
          <FormLabel> Time </FormLabel>
          <Select onChange={handleInputChange} name='time' placeholder='Select a timeslot'>
            {availableTimes.map((time, index) => {
                return (
                  <option key={index} value={time}>{time}</option>
                )
            })};
          </Select>
        </FormControl>
        
        <FormControl paddingBottom={10}>
          <FormLabel> Number of Guests</FormLabel>
          <Input onChange={handleInputChange} name='numOfGuests' type='number' placeholder='1' min='1' max='10'></Input>
        </FormControl>

        <FormControl paddingBottom={10}>
          <FormLabel> Occassion </FormLabel>
          <Select onChange={handleInputChange} name='ocassion' placeholder='Select the occasion'>
            <option> Birthday </option>
            <option> Anniversary </option>
            <option> Other </option>
          </Select>
        </FormControl>

        <Flex justifyContent='center'>
          <Button onClick={handleSubmit}> Reserve </Button>
        </Flex>
      </Box>
    </>
  );
};

export default BookingForm;