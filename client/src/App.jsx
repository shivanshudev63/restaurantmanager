import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OwnerHome from "./routes/OwnerHome";
import CustomerHome from "./routes/CustomerHome";
import Update from "./routes/Update";
import RestaurantdetailPage from "./routes/RestaurantdetailPage";
import Login from "./routes/Login";
import {
  RestaurantsContext,
  RestaurantsContextProvider,
} from "./context/RestaurantsContext";
import CustomerRestaurantMenuPage from "./routes/CustomerRestaurantMenuPage";
import OwnerRestaurantMenuPage from "./routes/OwnerRestaurantMenuPage";
import OwnerRestaurantdetailPage from "./routes/OwnerRestaurantDetailPage";

function App() {
  return (
    <RestaurantsContextProvider>
      <div className="App">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />

          <Route path="/ownerhome" element={<OwnerHome />} />
          <Route path="/customerhome" element={<CustomerHome />} />
          <Route path="/restaurants/:id/update" element={<Update />} />
          <Route
            path="/restaurants/ownerhome/:id/review"
            element={<OwnerRestaurantdetailPage />}
          />
          <Route
            path="/restaurants/customerhome/:id/review"
            element={<RestaurantdetailPage />}
          />
          <Route
            path="/restaurants/customerhome/:id/menu"
            element={<CustomerRestaurantMenuPage />}
          />
          <Route
            path="/restaurants/ownerhome/:id/menu"
            element={<OwnerRestaurantMenuPage />}
          />
        </Routes>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
