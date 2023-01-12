
import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <div style={{background:'black',bottom:'0',height:'50px',width:'100%',position:'fixed',marginTop:'20px'}}>
 <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography  sx={{ marginTop:'15px' }}>
                <a style={{color:'lightgrey',textDecoration:'none'}} href='https://personal-website-shivanshudev63.vercel.app/'>All Rights Reserved. Developed by: Shivanshu Dev</a>
                </Typography>
                
              </Box>

    </div>
  )
}

export default Footer