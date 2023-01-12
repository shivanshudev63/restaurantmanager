import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import { TextField,Box,Button} from '@mui/material';
import FormControl from '@mui/material/FormControl';

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  let history = useNavigate();
  const { restaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [status, setStatus]=useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}/update`);
      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
      setStatus(response.data.data.rstatus.status);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      
      name,
      location,
      price_range: priceRange,
      status
    });
    
    history("/ownerhome");
  };

  return (
    <Box
    display="flex" 
        alignItems="center"
        justifyContent="center" 
    >
      <div style={{background:'whitesmoke',opacity:.9,width:'25%',borderRadius:'25px'}}>
    <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
      ><h1 style={{fontSize:'200%',marginBottom:'0px', marginTop:'5%'}}>{name}</h1>
       
      </Box>
     <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
      ><TextField value={name} onChange={e=>setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" sx={{m:2,background:'white',opacity:.7,borderRadius:'5px'}}/>
       
       
      </Box>
 <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
      ><TextField value={location} onChange={e=>setLocation(e.target.value)} id="outlined-basic" label="Location" variant="outlined" sx={{m:2,background:'white',opacity:.7,borderRadius:'5px'}} />
</Box>
<Box 
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
      
    </div></Box>
    <Box 
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
      
    </div></Box>
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
    );
};

export default UpdateRestaurant;