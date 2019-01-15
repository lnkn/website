import React from 'react';
import {
NavLink,
} from "react-router-dom";

import ReactSVG from 'react-svg';
import logo from './assets/logo.svg';
import logo_100 from './assets/100.svg';

  const Nav = () => {
      return(
        <div className="nav">
        <div className="nav__logo">
          <NavLink to="/" activeClassName="active">
            <ReactSVG src={logo} />
          </NavLink>
        </div>
        <div className="nav__logo-middle">
            <img src={logo_100} alt="100"/>
        </div>
        <div className="nav__links">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/about"  activeClassName="active">About</NavLink>
            <NavLink to="/work"   activeClassName="active">Work</NavLink>
          </div>
      </div>
      )
  }
  
  export default Nav;  