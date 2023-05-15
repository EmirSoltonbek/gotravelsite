import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useTrip } from '../../contexts/TripContextProvider';

const TripDetails = () => {
  const navigate = useNavigate();
  const {getTripDetails, tripDetails} = useTrip();
  console.log(tripDetails)

  const {id} = useParams();

  React.useEffect(()=>{
    getTripDetails(id)
  },[])
   
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Box sx={{ width: "60vw", margin: "10vh auto" }}>
        <Typography variant="h4">DETAILS PANEL</Typography>
        <h3>Picture: {tripDetails.picture}</h3>
        <h3>Location: {tripDetails.location}</h3>
        <h3>Description: {tripDetails.description}</h3>
        <h3>Data: {tripDetails.data}</h3>
        <h3>Price: {tripDetails.price}</h3>
        <button onClick={goBack}>GO BACK</button>
      </Box>
    </>
  )
}

export default TripDetails;