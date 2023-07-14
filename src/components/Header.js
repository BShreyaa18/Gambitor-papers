import React from "react";
import logo from "../images/Logo.png";
import gambitor from "../images/Gambitor.png";
function Header()
{
    return(
        <nav className="navh">
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn" >
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">
        <img src={logo} alt="" id="logo"  className="logoh" />
        <img src={gambitor} alt="" id="gambitor" className="gambitorh" />
      </label>
      <ul className="headerlist">
       
        <li><a href="#">About</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Contact</a></li>
        <li><a className="active" href="#">Register</a></li>
        
      </ul>
    </nav>
    );
}
export default Header;