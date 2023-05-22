import React from 'react'
import '../styles/Jewelry.css'
import Hero from '../pages/Hero'
import Jewelry from '../pages/Jewelry'
import Electronics from '../pages/Electronics'
import WomenClothing from '../pages/WomenClothing'
import LastPage from '../pages/LastPage'

const Home = ({cartItem, setCartItem,handleAddToCart}) => {
  return (
    <div>
      <Hero />
      <Jewelry/>
      <Electronics/>
      <WomenClothing/>
      <LastPage/>
    </div>
  )
}

export default Home