import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import BookingForm from '../../components/BookingForm';

const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const timesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return action.payload;
      default:
        return state;
    }
  };


const Booking = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  return (
    <>
      <Navbar/>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    </>
  );
};

export default Booking;