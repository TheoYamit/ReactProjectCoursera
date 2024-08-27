import React, { useState, useReducer } from 'react';
import Navbar from '../../components/Navbar';
import BookingForm from '../../components/BookingForm';
import { fetchAPI, submitAPI } from '../../functions/api';

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
};

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};


const Booking = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
      <Navbar />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
};

export default Booking;