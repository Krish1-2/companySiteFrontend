// import React, { useState, useEffect } from 'react';
// import './navbar.css';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   // Assuming you have a variable or state to track user authentication status
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // You can use an effect to check the user's authentication status when the component mounts
//   useEffect( () => {
//     // You should replace this with your actual authentication logic
//     // For demonstration purposes, we're simulating authentication after 2 seconds
//     setTimeout(() => {
//       setIsAuthenticated(true); 
//       console.log(isAuthenticated)
//     }, 2000);
//   }, []);

//   return (
//     <div className={`navbar-container ${isAuthenticated ? '' : 'no-buttons'}`}>
//       <div className='navbar-main-div'>
//         <div className='navbar-sec-div'>
//           <Link className='nav-link' to='/'>HOME</Link>
//           <div className="dropdown">
//             <Link className='nav-link' to='/products'>PRODUCTS</Link>
//             <div className="dropdown-content">
//               <Link to='/pipes'>PIPES</Link>
//               <Link to='/wires'>WIRES</Link>
//               <Link to='/cables'>CABLES</Link>
//               <Link to='/switches'>SWITCHES</Link>
//             </div>
//           </div>
//           <div className="dropdown">
//             <Link className='nav-link' to='/download'>DOWNLOAD</Link>
//             <div className="dropdown-content">
//               <a href="/listPrice.pdf" download>PRICE LIST</a>
//             </div>
//           </div>
//           <Link className='nav-link' to='/contact'>CONTACT US</Link>
//           <Link className='nav-link' to='/review'>REVIEWS</Link>
//         </div>
//       </div>
//       <div className='login-register-div'>
//         {isAuthenticated ? (
//          <div></div>
//         ) : (
//           // If the user is not authenticated, show the LOGIN and REGISTER buttons
//           <>
//             <button className='auth-reg-btn'>
//               <Link className='text-decoration-none text-white' to='/login'>LOGIN</Link>
//             </button>
//             <button className='auth-reg-btn'>
//               <Link className='text-decoration-none text-white' to='/register'>REGISTER</Link>
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // Initialize isAuthenticated to false
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Event handler for setting isAuthenticated to true
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Event handler for setting isAuthenticated to true
  const handleRegister = () => {
    setIsAuthenticated(true);
  };

  return (
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
          <div>
          </div>
        ) : (
          // If the user is not authenticated, show the LOGIN and REGISTER buttons
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
  );
}
