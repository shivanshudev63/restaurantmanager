import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import OwnerRestaurantList from '../components/OwnerRestaurantList'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



function Home  ()  {

  return (
    <div>
    <Navbar />
    <Header />
    <AddRestaurant />
    <OwnerRestaurantList />
    <Footer />
    </div>
  )
}

export default Home