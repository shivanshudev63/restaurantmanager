import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div
      style={{
        background: "black",
        top: "0",
        height: "50px",
        width: "100%",
        position: "fixed",
        marginBottom: "20px",
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography sx={{ marginTop: "15px", marginX:'5px' }}>
          <a
            style={{
              color: "lightgrey",
              textDecoration: "none",
            }}
            href="/login"
          >
            DASHBOARD
          </a>
        </Typography>
        <Typography sx={{ marginTop: "15px", marginX:'5px' }}>
          <a
            style={{
              color: "lightgrey",
              textDecoration: "none",
            }}
            href="/restaurants/ownerSignIn"
          >
            SIGN IN
          </a>
        </Typography>
      </Box>
    </div>
  );
};

export default Navbar;
