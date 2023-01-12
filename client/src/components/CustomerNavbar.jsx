import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const CustomerNavbar = () => {
  const {id}=useParams();
  const handleRestaurantSelect = () => {
    history(`/restaurants/ownerhome/${id}/menu`);
    console.log(useParams())
  };

  return (
    <div
      style={{
        background: "black",
        top: "0",
        height: "50px",
        width: "100%",
        position: "fixed",
        marginBottom: "20px",
        display:"flex",
        justifyContent:"center"
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="center" marginX="25px">
        <Typography sx={{ marginTop: "10px" }}>
          <a
            style={{
              color: "lightgrey",
              textDecoration: "none",
            }}
            href="/customerhome"
          >
            HOME
          </a>
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" marginX="25px">
        <Typography sx={{ marginTop: "10px" }}  onClick={() => handleRestaurantSelect()}
>
        
          <a
            style={{
              color: "lightgrey",
              textDecoration: "none",
            }}
            href={`/restaurants/customerhome/${id}/review`}
          >
            
            REVIEWS
          </a>
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" marginX="25px">
        <Typography sx={{ marginTop: "10px" }}  onClick={() => handleRestaurantSelect()}
>
        
          <a
            style={{
              color: "lightgrey",
              textDecoration: "none",
            }}
            href={`/login`}
          >
            
            LOGOUT
          </a>
        </Typography>
      </Box>
    </div>
  );
};

export default CustomerNavbar;
