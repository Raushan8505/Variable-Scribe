
import { BrowserRouter } from 'react-router-dom'
import Navbartrio from './components/Navbartrio'
import Mainroute from './components/Mainroute'
import HomeFooter from './components/HomeFooter'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbartrio/>
    <Mainroute/>
    <HomeFooter/>
     </BrowserRouter>
     
    </>
  )
}

export default App
