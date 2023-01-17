import React, { useState,useContext } from 'react'
import { TextField,Box,Button} from '@mui/material';
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useParams } from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router-dom';

const AddMenu = () => {
  const { id } = useParams();
  const location = useLocation();
  const history = useNavigate();
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
const handleSubmit = async(e)=>{
  e.preventDefault();
  try {
    const response = await RestaurantFinder.post(`/ownerSignIn`, {
      username,
      password
      
    
    });
    if(response.data.data.owners!=undefined){
     
    history(`/ownerhome`);
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
{/* <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
      > <div>
      <FormControl sx={{ m: 2, minWidth: 225,background:'white',opacity:.7,borderRadius:'5px' }}>
       
        <select style={{height:"55px",background:'white',borderRadius:'5px',fontSize:"17px",paddingLeft:'10px',color:"grey"}} className="form-select" aria-label="Default select example" id="demo-simple-select-helper"
          value={priceRange}
          label="Price Range"
          onChange={(e)=>setPriceRange(e.target.value)}>
  <option defaultValue={""}>Price Range</option>
  <option value="1">$</option>
  <option value="2">$$</option>
  <option value="3">$$$</option>
  <option value="4">$$$$</option>
  <option value="5">$$$$$</option>
</select>
        
      </FormControl>
      
    </div></Box> */}
    {/* <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
      > <div>
      <FormControl sx={{ m: 2, minWidth: 225,background:'white',opacity:.7,borderRadius:'5px' }}>
       
        <select style={{height:"55px",background:'white',borderRadius:'5px',fontSize:"17px",paddingLeft:'10px',color:"grey"}} className="form-select" aria-label="Default select example" id="demo-simple-select-helper"
          value={status}
          label="Price Range"
          onChange={(e)=>setStatus(e.target.value)}>
  <option value="true">OPEN</option>
  <option value="false">CLOSE</option>
</select>
        
      </FormControl>
      
    </div></Box> */}
    <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center">  <Button onClick={handleSubmit} type="submit" variant="contained" href="#contained-buttons" size="large" 
        style={{marginBottom:'40px',marginTop:'15px'}}
>
  SUBMIT
</Button></Box>

    </div>
 
    </Box>
  )
}

export default AddMenu