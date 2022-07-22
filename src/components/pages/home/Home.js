import React from 'react'
import Header from './Header'
import HomeBrands from './HomeBrands'
import HomeCategories from './HomeCategories'
import HomeComments from './HomeComments'
import LatestProduct from './LatestProduct'
import SmartWatch from './SmartWatch'

const Home = () => {
  return (
    <section id="home">
      <Header />
      <HomeCategories />
      <LatestProduct />
      <SmartWatch />
      <HomeComments />
      <HomeBrands />
    </section>
  )
}

export default Home