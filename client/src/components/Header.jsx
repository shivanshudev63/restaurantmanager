import React from 'react'
import { Typography,Box } from '@mui/material';

const Header = () => {
  return (
    <div>
    <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
        sx={{m:10,mb:3}}
        
      >
     
      <Typography variant='h2' sx={{color:'white'}} >
    Restaurant Manager
   </Typography>

</Box>
   
    </div>
  )
}

export default Header