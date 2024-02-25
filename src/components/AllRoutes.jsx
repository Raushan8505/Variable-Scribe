import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeNavbar from './Atlasian_Homepage/HomeNavbar'
// import Resources from './Atlasian_Homepage/Resources'
import Teamcard from './Atlasian_Homepage/Teamcards'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeNavbar/>} />
        {/* <Route path="/Resources" element={<Resources/>} /> */}
        <Route path="/Team" element={<Teamcard/>} />
    </Routes>
  )
}

export default AllRoutes
