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
  const[item,setItem]=useState("");
const handleSubmit = async(e)=>{
  e.preventDefault();
  try {
    const response = await RestaurantFinder.post(`/${id}/addMenu`, {
      item
    
    });
    
    history(`/restaurants/ownerhome/${id}/menu`);
    history(location.pathname);
    window.location.reload();
  
  
}catch(err){

}
}
  return (
    <div >
<Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
        
      ><TextField value={item} onChange={(e)=>setItem(e.target.value)} id="outlined-basic" label="Name" variant="outlined" sx={{m:2,background:'white',opacity:.7,borderRadius:'5px'}}/>
        
       <Button onClick={handleSubmit} type="submit" variant="contained"  size="large">
  ADD
</Button></Box>

        
    </div>
  )
}

export default AddMenu