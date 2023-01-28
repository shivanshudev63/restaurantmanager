import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import OwnerNavbar from "../components/SignInNavbar";
import OwnerInvalid from "../components/OwnerInvalidLogin";

const InvalidLogin = () => {
  return (
    <div>
      <OwnerNavbar />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 5 }}
      >
        <Typography variant="h2" sx={{ color: "white", mt: 5, mb: 3 }}>
          SIGN IN
        </Typography>
      </Box>
      <OwnerInvalid />
      
     </div>
  );
};

export default InvalidLogin;
