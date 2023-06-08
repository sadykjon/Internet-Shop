import React from 'react'
import CustomNavbar from '../navbar/customnavbar'
import Home from '../home/home'
import CategoryProducts from '../category-products/category-products'

const Main = () => {
  return (
    <div>
      <CustomNavbar/>
      <Home/>
      <CategoryProducts/>
    </div>
  )
}

export default Main
