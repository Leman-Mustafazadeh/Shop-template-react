import React from 'react'
import Season from '../../Component/Season'
import ShopCategory from '../../Component/ShopCategory'
import ShopDeal from '../../Component/ShopDeal'
import ShopProductsExclusive from '../../Component/ShopProductsExclusive'
import ShopProductsSearch from '../../Component/ShopProductsSearch'
import ShopProducts from '../../Component/ShopProducts'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet>
                <title> Shop</title>
            </Helmet>
      <Season/>
      <ShopCategory/>
      <ShopDeal/>
      <ShopProducts/>
      <ShopProductsExclusive/>
      <ShopProductsSearch/>
    </>
  )
}

export default Home
