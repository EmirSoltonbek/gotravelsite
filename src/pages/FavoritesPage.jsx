import React from 'react'
import Favorites from '../components/favorites/Favorites'
import { Box, Grid } from '@mui/material'

const FavoritesPage = () => {
  return ( 
    <div style={{display:"flex", width:"95%", margin:"0 auto", justifyContent:"space-around", flexWrap:"wrap"}}><Favorites/></div>
  )
}

export default FavoritesPage