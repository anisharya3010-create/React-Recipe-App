import React from 'react'
import Navbar from './Navbar.jsx'
import PopularSlider from './PopularSlider.jsx'
import TrendingSlider from './TrendingSlider.jsx'

const Home = () => {
  return (
    <>
    <div className="main"> 
      <Navbar />
      <PopularSlider />
      <TrendingSlider />
      </div>
    </>
  )
}

export default Home
