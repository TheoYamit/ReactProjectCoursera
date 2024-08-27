import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookingform.css';
import { Flex, FormControl, FormLabel, FormErrorMessage, FormHelperText, Box, Input, Text, Image, HStack, VStack, Button, Select } from '@chakra-ui/react';
import reservedPic from '../../assets/reserved.jpg';
import { submitAPI } from '../../functions/api';

const BookingForm = (props) => {
  const { availableTimes, dispatch } = props;
  const navigate = useNavigate();

  const [formDetails, setFormDetails] = useState({
    date: '',
    time: '',
    numOfGuests: '',
    occasion: '',
  });

  const [errors, setErrors] = useState({
    date: false,
    time: false,
    numOfGuests: false,
    occasion: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (event) => {
    handleInputChange(event);
    const selectedDate = event.target.value;

    dispatch({
      type: 'UPDATE_TIMES',
      payload: selectedDate,
    });
  };

  const validateForm = () => {
    const newErrors = {
      date: !formDetails.date,
      time: !formDetails.time,
      numOfGuests: !formDetails.numOfGuests,
      occasion: !formDetails.occasion,
    };

    setErrors(newErrors);
    return Object.values(newErrors).every(value => !value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const isSuccess = submitAPI(formDetails);
      if (isSuccess) {
        navigate('/ConfirmedBooking');
      } else {
        alert('Failed to make a reservation. Please try again.');
      }
    }
  };

  useEffect(() => {
    console.log(formDetails);
  }, [formDetails]);

  return (
    <>
      <div className='booking-padding-first'>
        <HStack>
          <Image className='image-size' src={reservedPic} />
          <VStack>
            <Text fontSize='5xl' textAlign='center'> Reserve Your Table Now</Text>
            <Text fontFamily='proximanova regular' textAlign='center'> Fill out the below form to make sure you have your table reserved at the best restaurant in Chicago!</Text>
          </VStack>
        </HStack>
      </div>

      <Text paddingTop='100px' textAlign='center' fontSize='5xl'> Reservation Form </Text>

      <Box as='form' className='booking-padding-second' onSubmit={handleSubmit}>
        <FormControl isRequired paddingBottom={10} isInvalid={errors.date}>
          <FormLabel>Date</FormLabel>
          <Input onChange={handleDateChange} name='date' type='date' value={formDetails.date} />
          {errors.date && <FormErrorMessage>A date is required!</FormErrorMessage>}
        </FormControl>

        <FormControl isRequired paddingBottom={10} isInvalid={errors.time}>
          <FormLabel>Time</FormLabel>
          <Select onChange={handleInputChange} name='time' placeholder='Select a timeslot' value={formDetails.time}>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </Select>
          {errors.time && <FormErrorMessage>A time is required!</FormErrorMessage>}
        </FormControl>

        <FormControl isRequired paddingBottom={10} isInvalid={errors.numOfGuests}>
          <FormLabel>Number of Guests</FormLabel>
          <Input onChange={handleInputChange} name='numOfGuests' type='number' placeholder='1' min='1' max='10' value={formDetails.numOfGuests} />
          {errors.numOfGuests && <FormErrorMessage>Number of guests is required!</FormErrorMessage>}
        </FormControl>

        <FormControl isRequired paddingBottom={10} isInvalid={errors.occasion}>
          <FormLabel>Occasion</FormLabel>
          <Select onChange={handleInputChange} name='occasion' placeholder='Select the occasion' value={formDetails.occasion}>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </Select>
          {errors.occasion && <FormErrorMessage>An occasion is required!</FormErrorMessage>}
        </FormControl>

        <Flex justifyContent='center'>
          <Button type='submit'>Reserve</Button>
        </Flex>
      </Box>
    </>
  );
};

export default BookingForm;
