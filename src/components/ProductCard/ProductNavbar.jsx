import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./ProductNavbar.css"
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

function ProductNavbar({isAuthenticated}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { loginWithRedirect, logout, user} = useAuth0();
    console.log(isAuthenticated);

    return (
      <nav id='ProductNavbar_A'>
       
         <img className="logo" src='https://assets-global.website-files.com/5f32b7eea3b2c90751809aca/62bd60e5f7647998b2d3709d_Trilo%20Logo.svg' alt="logo" />
        
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            {!isAuthenticated? 
            (<button style={{backgroundColor:"green", height: "40px",width: "125px",borderRadius: "7px",color: "white"}} className="signout" onClick={() => loginWithRedirect()}><strong>Login/SignUp</strong></button>):
            (
                <>
                <li>
                <NavLink to="/triloHome"><strong>Home</strong></NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/triloHome/product"><strong>Products</strong></NavLink>
              </li>
           <li>
                <NavLink activeClassName="active" to="/triloHome/billing"><strong>Billing</strong></NavLink>
              </li>
              
              <li>
                <Button style={{color:"black"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button>
              </li>
              {isAuthenticated && <li style={{paddingTop: "8px",marginRight: "15px"}}><strong>{user.name}</strong></li>}
              </>
            )}
        
          
        </ul>
      </nav>
      
    );
}

export default ProductNavbar