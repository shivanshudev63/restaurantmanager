import React from 'react'
import UpdateRestaurant from "../components/UpdateRestaurant";
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Footer from '../components/Footer';

const Update = () => {
  return (
    <div>  <Box 
    display="flex" 
    alignItems="center"
    justifyContent="center"
    sx={{m:10,mb:3}}
    
  >
 
  <Typography variant='h2' sx={{color:'white'}} >
Update Restaurant
</Typography>
</Box>
      <UpdateRestaurant />
      {/* <Footer /> */}
      
    </div>
  )
}

export default Update