
import { BrowserRouter } from 'react-router-dom'
import Navbartrio from './components/Navbartrio'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Teamcard from './components/Teamcards'

import Mainroute from './components/Mainroute'
import HomeFooter from './components/HomeFooter'

function App() {


  return (
    <>
     <BrowserRouter>
      <Navbartrio />
      {/* <Teamcard /> */}
    <Mainroute/>
    <HomeFooter/>
     </BrowserRouter>
     
    </>
  )
}

export default App
