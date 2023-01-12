import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

const theme = createTheme();

const OwnerMenus = ({ menus }) => {
  let history = useNavigate();

  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
      } catch (err) {}
    };
    fetchData();
  }, []);

  const handleDelete = async (e, restaurant_id, id) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(
        `ownerhome/${restaurant_id}/menu/${id}`
      );
      setRestaurants(
        menus.filter((menu) => {
          return menu.id !== id;
        })
      );
      history(`/restaurants/ownerhome/${restaurant_id}/menu`);
      history(location.pathname);
      window.location.reload();    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main style={{ display: "flex", justifyContent: "center" }}>
        <div className="card" style={{ width: "30rem", textAlign: "center" }}>
          <div
            className="card-header"
            style={{ fontSize: "30px", fontWeight: "bold" }}
          >
            Cuisine We Serve
          </div>
          <ul className="list-group list-group-flush">
            {menus &&
              menus.map((menu) => {
                return (
                  <li
                    className="list-group-item"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                    key={menu.id}
                  >
                    {menu.item}
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={(e) =>
                        handleDelete(e, menu.restaurant_id, menu.id)
                      }
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default OwnerMenus;
