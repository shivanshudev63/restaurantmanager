import React from 'react'
import {useParams} from 'react-router-dom';
import { useContext,useEffect } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import StarRating from '../components/StarRating';
import Footer from '../components/Footer';
import CustomerReviewNavbar from '../components/CustomerReviewNavbar';



const RestaurantdetailPage = () => {
  const {id} = useParams();
  const {selectedRestaurant, setSelectedRestaurant}=useContext(RestaurantsContext);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/ownerhome/${id}/review`);

        setSelectedRestaurant(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>{selectedRestaurant && (
      <>
      <CustomerReviewNavbar />
      <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: 5}}
              >
                <Typography variant="h2" sx={{ color: "white", mt: 5  }}>
                  {selectedRestaurant.restaurant.name}
                </Typography>
                
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography display="flex"
                alignItems="center"
                justifyContent="center" variant="h4" sx={{background:'white',padding:'10px',borderRadius:'50px',
           boxShadow: "1px 2px 9px black",marginTop:'10px' }}>
                 <StarRating rating ={selectedRestaurant.restaurant.average_rating} />
                 <span style={{color:'#FFA300',fontSize:'20px'}}>{selectedRestaurant.restaurant.count?`(${selectedRestaurant.restaurant.count})`:"(0)"}</span>
                </Typography>
                
              </Box>

        <div className='mt-3'>
          <Reviews reviews={selectedRestaurant.reviews} />
        </div>
        <AddReview />
        <Footer />
      </>
    )}</div>
  )
}

export default RestaurantdetailPage