import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import AddReview from "../components/AddReview";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import StarRating from "../components/StarRating";
import Footer from "../components/Footer";
import OwnerMenus from "../components/OwnerMenus";
import { useNavigate } from "react-router-dom";
import AddMenu from "../components/AddMenu";
import SignUpNavbar from "../components/SignUpNavbar";
import OwnerLogin from "../components/OwnerSignUp";

const OwnerRestaurantMenuPage = () => {
  return (
    <div>
      <SignUpNavbar />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 5 }}
      >
        <Typography variant="h2" sx={{ color: "white", mt: 5, mb: 3 }}>
          SIGN UP
        </Typography>
      </Box>
      <OwnerLogin />
      <div>{/* <OwnerMenus menus={selectedRestaurant.menus} /> */}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default OwnerRestaurantMenuPage;
