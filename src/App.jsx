
import { BrowserRouter } from 'react-router-dom'
import Navbartrio from './components/Navbartrio'
import Mainroute from './components/Mainroute'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ProductCard from './components/Products/ProductCard'


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbartrio/>
    <Mainroute/>
     <ProductCard/>
     </BrowserRouter>
    </>
  )
}

export default App
