import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Footer from "../components/Footer";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    overflow: "hidden",
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "auto",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <div
        style={{
          background: "whitesmoke",

          borderRadius: "25px",
          marginTop: "10%",
          display: "flex",
        }}
      >
        <Box>
          <Paper elevation={24} className={classes.root}>
            <a
              href="/customerhome"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="./image2.jpeg"
                alt=""
                className={classes.image}
              />
            </a>
          </Paper>
          <Typography align="center" variant="h4">
            {" "}
            Customer
          </Typography>
        </Box>

        <Box>
          <Paper elevation={24} className={classes.root}>
            <a
              href="/restaurants/ownerSignIn"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src="./image2.png" alt="" className={classes.image} />
            </a>
          </Paper>

          <Typography align="center" variant="h4">
            Owner
          </Typography>
        </Box>
      </div>
      {/* <Footer /> */}
    </Box>
  );
};

export default Login;
