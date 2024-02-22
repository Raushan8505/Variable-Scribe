
import { BrowserRouter } from 'react-router-dom'
import Navbartrio from './components/Navbartrio'
import Mainroute from './components/Mainroute'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbartrio/>
    <Mainroute/>
     </BrowserRouter>
     
    </>
  )
}

export default App
