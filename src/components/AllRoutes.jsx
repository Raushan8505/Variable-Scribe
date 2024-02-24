import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeNavbar from './Atlasian_Homepage/HomeNavbar'
import Resources from './Atlasian_Homepage/Resources'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeNavbar/>} />
        <Route path="/Resources" element={<Resources/>} />
    </Routes>
  )
}

export default AllRoutes
