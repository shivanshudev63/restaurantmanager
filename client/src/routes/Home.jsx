import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantLIst from '../components/RestaurantLIst'
import Footer from '../components/Footer'



function Home  ()  {
  return (
    <div>
    <Header />
    <AddRestaurant />
    <RestaurantLIst />
    <Footer />
    </div>
  )
}

export default Home