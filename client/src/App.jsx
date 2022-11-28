import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Update from "./routes/Update";
import RestaurantdetailPage from "./routes/RestaurantdetailPage";
import { RestaurantsContext, RestaurantsContextProvider } from "./context/RestaurantsContext";

function App() {
  return (
   <RestaurantsContextProvider>
<div className="App">
<div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants/:id/update" element={<Update />} />
          <Route path="/restaurants/:id" element={<RestaurantdetailPage />} />
        </Routes>
        
      </Router>
      
    </div>
   </RestaurantsContextProvider>

  );
}

export default App;
