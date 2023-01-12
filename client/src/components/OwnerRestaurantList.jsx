import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/joy/Chip";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import Box from "@mui/material/Box";
import Welcome from "./Welcome";
import NWelcome from "./NWelcome";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const 


OwnerRestaurantLIst = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let history = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
      } catch (err) {}
    };
    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleRestaurantSelect = (id) => {
    history(`/restaurants/ownerhome/${id}/menu`);
  };


  const handleStatusSelect = (restaurant) => {
    if(restaurant.status)
    return(
      <Welcome />
    )
    return <NWelcome />
      };



  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history(`/restaurants/${id}/update`);
  };

  const renderRating = (restaurant) => {
    if (!restaurant.count) {
      return <span style={{ color: "#FFA300" }}>0 reviews</span>;
    }
    return (
      <>
        <Box display="flex" alignItems="center" justifyContent="center">
          <StarRating rating={restaurant.average_rating} />
          <span style={{ color: "#FFA300" }}>({restaurant.count})</span>
        </Box>
      </>
    );
  };

  return (
    <div style={{ marginInline: "10%", paddingBottom: "150px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                align="center"
                style={{ fontSize: "20px", color: "lightgrey" }}
              >
                Restaurant
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ fontSize: "20px", color: "lightgrey" }}
              >
                Location
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ fontSize: "20px", color: "lightgrey" }}
              >
                Price Range
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ fontSize: "20px", color: "lightgrey" }}
              >
                Reviews
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ fontSize: "20px", color: "lightgrey" }}
              >
                Status
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ fontSize: "20px", color: "lightgrey" }}
              >
                Edit
              </StyledTableCell>

              <StyledTableCell
                align="center"
                style={{ fontSize: "20px", color: "lightgrey" }}
              >
                Delete
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurants &&
              restaurants.map((restaurant) => {
                return (
                  <StyledTableRow
                    onClick={() => handleRestaurantSelect(restaurant.id)}
                    sx={{ cursor: "pointer" }}
                    key={restaurant.id}
                  >
                    <StyledTableCell component="th" scope="row" align="center">
                      {restaurant.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {restaurant.location}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {"$".repeat(restaurant.price_range)}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {renderRating(restaurant)}
                    </StyledTableCell>
                    <StyledTableCell align="center" >
                      
                      {handleStatusSelect(restaurant)}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {" "}
                      <Chip
                        style={{ background: "#6c3" }}
                        onClick={(e) => handleUpdate(e, restaurant.id)}
                      >
                        Update
                      </Chip>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Chip
                        style={{ background: "#B33F40" }}
                        onClick={(e) => handleDelete(e, restaurant.id)}
                      >
                        Delete
                      </Chip>
                    </StyledTableCell>

                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OwnerRestaurantLIst;
