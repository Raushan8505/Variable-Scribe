import  { useState } from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/Trilo-Logo-Color.svg"

 const Navbartrio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
     
       <img className="logo" src={logo} alt="logo" />
      
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
     <li>
          <NavLink to="/billing">Billing</NavLink>
        </li>
        <li>
          <NavLink to="/customers">Customers</NavLink>
        </li> 
        <button className="signout">Sign-Out</button>
      </ul>
    </nav>
    
  );
};

export default Navbartrio;