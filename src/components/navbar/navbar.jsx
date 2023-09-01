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
        <div className="dropdown">
          <Link className='nav-link'>DOWNLOAD</Link>
          <div className="dropdown-content">
              <Link><a href="/listPrice.pdf" download>PRICE LIST</a></Link>
            </div>
          </div>
        <Link className='nav-link' to='/contact'>CONTACT US</Link>
        <Link className='nav-link' to='/LOGIN'>LOGIN</Link>
      </div>
    </div>
  );
}
