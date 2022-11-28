import React, { useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { TextField, FormControl, Button } from "@mui/material";

const AddReview = () => {
  const { id } = useParams();
  const location = useLocation();
  const history = useNavigate();
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });
      
      history("/");
      history(location.pathname);
      window.location.reload();
    } catch (err) {}
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ paddingBottom: "50px"}}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          background: "whitesmoke",
          opacity: ".85",
          width: "76%",
          borderRadius: "5px",
          padding: "3%",
           boxShadow: "1px 2px 9px black"
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            label="Name"
            variant="outlined"
            sx={{
              mx: 2,
              background: "white",
              opacity: 0.7,
              borderRadius: "5px",
              boxShadow: "1px 2px 9px black"
            }}
          />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          {" "}
          <FormControl
            sx={{
              mx: 2,
              minWidth: 225,
              background: "white",
              opacity: 0.7,
              borderRadius: "5px",
              boxShadow: "1px 2px 9px black"
            }}
          >
            <select
              style={{
                height: "55px",
                background: "white",
                borderRadius: "5px",
                fontSize: "17px",
                paddingLeft: "10px",
                color: "grey",
              }}
              className="form-select"
              aria-label="Default select example"
              label="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
            >
              <option defaultValue={""}>Ratings</option>
              <option value="1">1 STAR</option>
              <option value="2">2 STAR</option>
              <option value="3">3 STAR</option>
              <option value="4">4 STAR</option>
              <option value="5">5 STAR</option>
            </select>
          </FormControl>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <TextField
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="Review"
            label="Write your review"
            variant="outlined"
            sx={{
              mx: 2,
              background: "white",
              opacity: 0.7,
              borderRadius: "5px",
              boxShadow: "1px 2px 9px black"
            }}
          />
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center">
          <Button
            onClick={handleSubmitReview}
            type="submit"
            variant="contained"
            size="large"
            style={{marginInline:'20px',boxShadow: "1px 2px 9px black"}}
          
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddReview;
