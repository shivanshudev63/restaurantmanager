import React from "react";
import StarRating from "./StarRating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Reviews = ({ reviews }) => {
  return (
    <ThemeProvider theme={theme}>
            <CssBaseline />

            <main>
              {/* Hero unit */}
             
              <Container sx={{ py: 5 }} maxWidth="lg" >
                {/* End hero unit */}
                <Grid container spacing={4}>
    
      {reviews.map((review) => {
        return (
          
                  <Grid item key={review.id} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        background: "white",
                        boxShadow: "1px 2px 9px black"
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1, color: "black" }} >
                        <Typography gutterBottom variant="h5" component="h2" style={{border:'solid',borderColor:'transparent transparent black transparent',borderWidth:'1px',paddingBottom:'10px'}}>
                          {review.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                          <span>
                            <StarRating rating={review.rating} />
                          </span>
                        </Typography>
                        <Typography>{review.review}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                
        );
      })}
      
   
    </Grid>
              </Container>
            </main>
          </ThemeProvider>
  );
};

export default Reviews;
