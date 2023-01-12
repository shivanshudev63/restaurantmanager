import React from "react";
import Header from "../components/Header";
import RestaurantLIst from "../components/RestaurantLIst";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function Home() {
  return (
    <div>
    <Navbar />
      <Header />
      <RestaurantLIst />
      <Footer />
    </div>
  );
}

export default Home;
