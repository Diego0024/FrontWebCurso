import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
<nav className="navbar">
<p className='titulo'>Clase final</p>
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span className="toggle-icon">&#9776;</span>
        </button>
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <NavLink exact to="/" activeClassName="active" className="link" onClick={toggleNavbar}>
              Dashboard
            </NavLink>
            <NavLink
            to="/profile" 
            activeClassName="active" 
            className="link" 
            onClick={toggleNavbar}>
              Profile
            </NavLink>
            <NavLink to="/admin" 
            activeClassName="active" 
            className="link" 
            onClick={toggleNavbar}>
              Admin
            </NavLink>
            <div className='navbar-links-right'>
              <NavLink to="/login" 
              activeClassName="active"
              className="link" 
              onClick={toggleNavbar}>
                Login
              </NavLink>
            </div>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;



