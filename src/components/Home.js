import React from 'react'
import '../styles/Home.css'
import Hero from '../pages/Hero'

const Home = ({cartItem, setCartItem,handleAddToCart}) => {
  return (
    <div>
      <Hero />
    </div>
  )
}

export default Home