import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <div className='mobile-view-navbar'>
    <nav className="navbar p-2">
    <img src='./images/logo white.png' style={{width:'70px',height:"70px"}}/>

      <div className="navbar-container">
      <button className="menu-button" onClick={toggleMenu}>
          <div className={`menu-icon ${isOpen ? 'open' : ''}`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <Link className='nav-link' to='/'>HOME</Link>
          <div className="dropdown">
             <Link className='nav-link'>PRODUCTS</Link>
             <div className="dropdown-content">
               <Link to='/pipes'>PIPES</Link>
               <Link to='/wires'>WIRES</Link>
               <Link to='/cables'>CABLES</Link>
               <Link to='/switches'>SWITCHES</Link>
               <Link to='/accessories'>ACCESSORIES</Link>
             </div>
           </div>
           <div className="dropdown">
             <Link className='nav-link' >DOWNLOAD</Link>
             <div className="dropdown-content">
               <a href="/listPrice.pdf" download>PRICE LIST</a>
             </div>
           </div>
           <Link className='nav-link' to='/contact'>CONTACT US</Link>
           <Link className='nav-link' to='/review'>REVIEWS</Link>
        </ul>
      </div>
    </nav>
    </div>
   <div className='laptop-view-navbar'>
    <div className='head p-4'><p className="px-3">HITESH</p><img src='./images/logo.png ' alt='logo' className='head-img'/><p className='px-3'>ELECTRICALS</p></div>
    <div className={`navbar-container ${isAuthenticated ? 'no-buttons' : ''}`}>
 <div className='navbar-main-div'>
        <div className='navbar-sec-div'>
          <Link className='nav-link' to='/'>HOME</Link>
          <div className="dropdown">
             <Link className='nav-link'>PRODUCTS</Link>
             <div className="dropdown-content">
               <Link to='/pipes'>PIPES</Link>
               <Link to='/wires'>WIRES</Link>
               <Link to='/cables'>CABLES</Link>
               <Link to='/switches'>SWITCHES</Link>
               <Link to='/accessories'>ACCESSORIES</Link>
             </div>
           </div>
           <div className="dropdown">
             <Link className='nav-link' >DOWNLOAD</Link>
             <div className="dropdown-content">
               <a href="/listPrice.pdf" download>PRICE LIST</a>
             </div>
           </div>
           <Link className='nav-link' to='/contact'>CONTACT US</Link>
           <Link className='nav-link' to='/review'>REVIEWS</Link>
        </div>
      </div>
      <div className='login-register-div'>
        {isAuthenticated ? (
          <div style={{display:'none'}}>
          </div>
        ) : (
          <>
            <button className='auth-reg-btn' onClick={handleLogin}>
              <Link className='text-decoration-none text-white' to='/login'>LOGIN</Link>
            </button>
            <button className='auth-reg-btn' onClick={handleRegister}>
              <Link className='text-decoration-none text-white' to='/register'>REGISTER</Link>
            </button>
          </>
        )}
      </div>
    </div>
    </div>
  </div>
  );
}
