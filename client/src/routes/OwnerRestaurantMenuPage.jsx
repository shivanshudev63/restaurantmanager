import React from 'react'
import {useParams} from 'react-router-dom';
import { useContext,useEffect } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import AddReview from '../components/AddReview';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import StarRating from '../components/StarRating';
import Footer from '../components/Footer';
import OwnerMenus from '../components/OwnerMenus';
import { useNavigate } from 'react-router-dom';
import AddMenu from '../components/AddMenu';
import OwnerNavbar from '../components/OwnerNavbar';


const OwnerRestaurantMenuPage = () => {
  let history=useNavigate();
  const {id} = useParams();
  const {selectedRestaurant, setSelectedRestaurant}=useContext(RestaurantsContext);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/ownerhome/${id}/menu`);

        setSelectedRestaurant(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleclick=(id)=>{
    history(`/restaurants/ownerhome/${id}/review`);
    window.location.reload();
  }
    return (
    <div>{selectedRestaurant && (
      <>
      <OwnerNavbar />
      <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: 5}}
              >
                <Typography variant="h2" sx={{ color: "white", mt: 5 }} >
                  {selectedRestaurant.restaurant.name}
                </Typography>
                
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography display="flex" onClick={()=>handleclick(selectedRestaurant.restaurant.id)}
                alignItems="center"
                justifyContent="center" variant="h4" sx={{background:'white',padding:'10px',borderRadius:'50px',
           boxShadow: "1px 2px 9px black",marginTop:'10px',cursor:'pointer' }}>
                 <StarRating rating ={selectedRestaurant.restaurant.average_rating} />
                 <span style={{color:'#FFA300',fontSize:'20px'}}>{selectedRestaurant.restaurant.average_rating?`(${selectedRestaurant.restaurant.average_rating})`:"(0)"}</span>
                 
                </Typography>
                
                
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography display="flex" 
                alignItems="center"
                justifyContent="center" variant="h4" sx={{padding:'10px',cursor:'pointer' }}
                onClick={()=>handleclick(selectedRestaurant.restaurant.id)}>
                 <span style={{color:'white',fontSize:'20px'}}>CLICK ABOVE TO VIEW REVIEWS</span>
                 
                </Typography>
                
                
              </Box>

        <div >
        <AddMenu />
          <OwnerMenus menus={selectedRestaurant.menus} />
        </div>
        {/* <Footer /> */}
      </>
    )}</div>
  )
}

export default OwnerRestaurantMenuPage