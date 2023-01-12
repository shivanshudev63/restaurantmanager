import React, { useState,useContext } from 'react'
import { TextField,Box,Button} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurant = () => {
  const[name,setName]=useState("");
  const[location,setLocation]=useState("");
  const[priceRange,setPriceRange]=useState("Price Range");
  
const {addRestaurants}=useContext(RestaurantsContext);
const handleSubmit = async(e)=>{
  e.preventDefault();
  
try{
  const response = await RestaurantFinder.post("/",{
    name:name,
   location: location,
    price_range: priceRange
  });
  addRestaurants(response.data.data.restaurant)
  setName('');
  setLocation('');
  setPriceRange('Price Range');
  
  
}catch(err){

}
}
  return (
    <div >
<Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
        
      ><TextField value={name} onChange={e=>setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" sx={{m:2,background:'white',opacity:.7,borderRadius:'5px'}}/>
        <TextField value={location} onChange={e=>setLocation(e.target.value)} id="outlined-basic" label="Location" variant="outlined" sx={{m:2,background:'white',opacity:.7,borderRadius:'5px'}} />

        <div>
      <FormControl sx={{ m: 2, minWidth: 225,background:'white',opacity:.7,borderRadius:'5px' }}>
       
        <select style={{height:"55px",background:'white',borderRadius:'5px',fontSize:"17px",paddingLeft:'10px',color:"grey"}} class="form-select" aria-label="Default select example" id="demo-simple-select-helper"
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
      
    </div>
       <Button onClick={handleSubmit} type="submit" variant="contained"  size="large">
  ADD
</Button></Box>

        
    </div>
  )
}

export default AddRestaurant