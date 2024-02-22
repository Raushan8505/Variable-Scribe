import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Billing from './Billing'
import Customers from './Customers'
const Mainroute = () => {
    return (
       
        <Routes>
        <Route path='/billing' element={<Billing/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/customers' element={<Customers/>}/>
       </Routes>
       
    )
}
export default Mainroute;