import React, { useState ,useEffect} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Navbar() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenDownload, setIsDropdownOpenDownload] = useState(false);
  const [fontSize, setFontSize] = useState(16); 

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    
  };

  const toggleDropdownDownload = () => {
    setIsDropdownOpenDownload(!isDropdownOpenDownload);
    console.log(isDropdownOpenDownload);
  };

  const handleLogout =async() => {
    setIsAuthenticated(false);
    var accessToken=sessionStorage.getItem('accessToken');
    if(accessToken==null){
      accessToken='#';
    }
    const newAccessToken =  accessToken.replace(/^"|"$/g, '');
    console.log(newAccessToken);
    sessionStorage.removeItem('accessToken');
    try {
      const response = await axios.post(
        'http://localhost:8000/logout/',
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${newAccessToken}`,
          },
        }
      );
      if (response.status === 200) {
         console.log('Logout successful');
         } else {
         console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newFontSize = window.innerWidth < 1025 ? 18 : 23; 
      setFontSize(newFontSize);
      const navLinks = document.querySelectorAll(".nav-link");
  
      navLinks.forEach((navLink) => {
    navLink.style.fontSize = `${newFontSize}px`;
    });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
    <div className='mobile-view-navbar'>
    <nav className="navbar p-2">
    <img src='./images/logo white.png' style={{width:'70px',height:"70px"}} alt='logo'/>

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
          <Link className='nav-link' onClick={toggleDropdown}>PRODUCTS</Link>
             {isDropdownOpen && (
                  <ul className="dropdown-content">
                    <Link to='/pipes'>PIPES</Link>
                    <Link to='/wires'>WIRES</Link>
                    <Link to='/cables'>CABLES</Link>
                    <Link to='/switches'>SWITCHES</Link>
                    <Link to='/accessories'>ACCESSORIES</Link>
                  </ul>
                )}
           </div>

           <div className="dropdown">
             <Link className='nav-link' onClick={toggleDropdownDownload}>DOWNLOAD</Link>
             {isDropdownOpenDownload && (
                  <ul className="dropdown-content">
               <a href="/listPrice.pdf" download>PRICE LIST</a>
               </ul>
                )}
                </div>
          
           <Link className='nav-link' to='/contact'>CONTACT US</Link>
           <Link className='nav-link' to='/review'>REVIEWS</Link>
           <div className='login-register-div'>
        {isAuthenticated ? (
          <Link className='nav-link' to='/login' onClick={handleLogout}>LOGOUT</Link>
   
        ) : (
          <>
              <Link className='nav-link' to='/login' onClick={handleLogin}>LOGIN</Link>
            
              <Link className='nav-link' to='/register' onClick={handleLogin}>REGISTER</Link>
          </>
        )}
      </div>
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
          <button className='auth-reg-btn text-decoration-none text-white' onClick={handleLogout}>
                LOGOUT
            </button>
   
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
