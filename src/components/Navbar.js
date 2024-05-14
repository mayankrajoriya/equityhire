import React, { useState } from "react";
import {  NavLink } from "react-router-dom";

const Navbar1 = () => {
    const[hamburger,showHamburger]=useState(false)
  return (
    <nav>
      <h1 className="title">EquityHire</h1>
      <div className="menu" onClick={()=>{showHamburger(!hamburger)}}>
      <span></span>
      <span></span>
      <span></span></div>
      <ul className={hamburger?"open":""}>
        <li>
          <NavLink className="nav_items" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_items" to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_items" to="/industry">
            Industry
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar1;
