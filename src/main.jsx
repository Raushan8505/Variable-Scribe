import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './components/Redux/store.js'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-tuhvv2ft848hmod6.us.auth0.com"
    clientId="oVPH4wrpffKNbACAaaCAUXrh7DrOWife"
    authorizationParams={{
      redirect_uri: window.location.origin}}>
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </Auth0Provider>
)
