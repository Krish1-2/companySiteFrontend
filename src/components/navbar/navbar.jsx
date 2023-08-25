import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar-main-div'>
      <div className='navbar-sec-div'>
        <Link className='nav-link' to='/'>HOME</Link>
        <div className="dropdown">
          <Link className='nav-link' >PRODUCTS</Link>
          <div className="dropdown-content">
            <Link to='/pipes'>PIPES</Link>
            <Link to='/wires'>WIRES</Link>
            <Link to='/cables'>CABLES</Link>
            <Link to='/switches'>SWITCHES</Link>
          </div>
        </div>
        <Link className='nav-link' to='/company'>COMPANY</Link>
        <Link className='nav-link' to='/contact'>CONTACT US</Link>
      </div>
    </div>
  );
}