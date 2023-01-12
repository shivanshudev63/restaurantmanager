import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Menus = ({ menus }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="card"
          style={{ width: "30rem", textAlign: "center" }}
        >
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
                  <li className="list-group-item" key={menu.id}>
                    {menu.item}
                  </li>
                );
              })}
          </ul>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default Menus;
