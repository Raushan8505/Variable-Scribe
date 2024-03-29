import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeNavbar from './Atlasian_Homepage/HomeNavbar'
import Resources from './Atlasian_Homepage/Resources'
import Billing from './ProductCard/Billing'
import ProductCard from './ProductCard/ProductCard'
import CommonRoutes from './ProductCard/CommonRoutes'
import PaymentPage from './ProductCard/PaymentPage'
import PaymentSuccessfull from './ProductCard/PaymentSuccessfull'
import Teamcard from './Atlasian_Homepage/Teamcard'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeNavbar/>} />
        <Route path="/Resources" element={<Resources/>} />
        <Route path='/triloHome' element={<CommonRoutes/>}/>
        <Route path='/triloHome/billing' element={<Billing/>}/>
        <Route path='/triloHome/product' element={<ProductCard/>}/>
        <Route path ='/triloHome/payment' element={<PaymentPage/>}/>
        <Route path ='/triloHome/paymentsuccess' element={<PaymentSuccessfull/>}/>
        <Route path='/team' element={<Teamcard/>}/>
    </Routes>
  )
}

export default AllRoutes
