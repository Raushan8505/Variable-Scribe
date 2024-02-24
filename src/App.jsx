import { Route, Routes } from "react-router-dom"
import HomePage from './components/HomeNavbar'
import HomeNavbar from "./components/HomeNavbar"
import Resources from "./components/Resources"
import Trillo from "./components/Trillo"

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomeNavbar/>} />
        <Route path="/Resources" element={<Resources/>} />
        <Route path="/POS" element={<Trillo/>} />
      </Routes>
     
    </>
  )
}

export default App
