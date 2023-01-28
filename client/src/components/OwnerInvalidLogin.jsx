import React, { useState,useContext } from 'react'
import { TextField,Box,Button, ownerWindow} from '@mui/material';
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useParams } from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router-dom';

const OwnerInvalid = () => {
  const { id } = useParams();
  const location = useLocation();
  const history = useNavigate();
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
const handleSubmit = async(e)=>{
  e.preventDefault();
  try {
    const response = await RestaurantFinder.post(`/ownerinvalid`, {
      username,
      password
      
    
    });
    if(response.data.data.owners!=undefined){
     
    history(`/ownerHome`);
    }

    if(response.data.data.owners==undefined){
      history('/ownerinvalid');
    }
    
}catch(err){

}
}
  return (
    <Box
    display="flex" 
        alignItems="center"
        justifyContent="center" 
    >
      <div style={{background:'whitesmoke',width:'25%',borderRadius:'25px'}}>
    
   <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
      ><TextField value={username} onChange={e=>setUsername(e.target.value)} id="outlined-basic" label="USERNAME" variant="outlined" sx={{m:2,mt:5,background:'white',borderRadius:'5px'}}/>
       
       
      </Box>
  <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
      ><TextField value={password} onChange={e=>setPassword(e.target.value)} id="outlined-basic" label="PASSWORD" variant="outlined" sx={{m:2,background:'white',borderRadius:'5px'}} />
</Box>

    <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center">  <Button onClick={handleSubmit} type="submit" variant="contained" href="#contained-buttons" size="large" 
        style={{marginTop:'15px'}}
>
  SUBMIT
</Button></Box>
<Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
        style={{color:'red',marginTop:'15px', fontWeight:'bold'}}>  
        Incorrect Username or Password
        </Box>
        <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
        style={{color:'red',marginBottom:'40px', fontWeight:'bold'}}>  
Please try again.        </Box>

    </div>
 
    </Box>
  )
}

export default OwnerInvalid