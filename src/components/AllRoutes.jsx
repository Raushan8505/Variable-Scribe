import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeNavbar from './Atlasian_Homepage/HomeNavbar'
import Resources from './Atlasian_Homepage/Resources'
import Billing from './ProductCard/Billing'
import ProductCard from './ProductCard/ProductCard'
import CommonRoutes from './ProductCard/CommonRoutes'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeNavbar/>} />
        <Route path="/Resources" element={<Resources/>} />
        <Route path='/triloHome' element={<CommonRoutes/>}/>
        <Route path='/triloHome/billing' element={<Billing/>}/>
        <Route path='/triloHome/product' element={<ProductCard/>}/>

    </Routes>
  )
}

export default AllRoutes
