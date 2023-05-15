import React, { useEffect, useState } from 'react'
import { useTrip } from '../../contexts/TripContextProvider'
import TripCard from './TripCard'
import { useSearchParams } from 'react-router-dom';
import { Box, Grid, Pagination } from '@mui/material';

const TripList = () => {
    const {trips, getTrips}= useTrip();
    const [searchParams, setSearchParams]= useSearchParams();

    useEffect(()=>{
        getTrips()
    },[])
    console.log(trips);

    useEffect(()=>{
      getTrips();
      setPage(1)
    },[searchParams])

    const [page , setPage] = useState(1);
    const itemsPerPage = 12;
    const count = Math.ceil(trips?.length / itemsPerPage)

    const handleChange = (e, p) => {
      setPage(p);
    };

    function currentData(){
      const begin = (page-1)*itemsPerPage;
      const end = begin + itemsPerPage;
      return  trips.slice(begin, end);
    }
    
      return (
    <>
     <Grid item md={12}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            my: "2rem",
            justifyContent: "space-evenly",
          }}
        >
          {currentData().map((item) => (
            console.log(item),
            <TripCard key={item.id} item={item} />
          ))}
        </Box>
        <Box 
         sx={{
          display: "flex",
          my: "2rem",
          justifyContent: "center",
        }}>
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        />
        </Box>
      </Grid>
    </>
  )
}

export default TripList