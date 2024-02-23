import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Billing from './Billing'
import Customers from './Customers'
import Home from './Home'
const Mainroute = () => {
    return (
       
        <Routes>
        <Route path='/billing' element={<Billing/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/customers' element={<Customers/>}/>
        <Route path='/' element={<Home/>}/>
       </Routes>
       
    )
}
export default Mainroute;