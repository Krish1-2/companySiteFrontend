import React from 'react';
import './expertise.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function Expertise() {
  return (
    <div className="expertise-container">
      <div className="expertise-content">
  <h2 className='text-dark'>Expertise Page</h2>
  <p>
    If you need help regarding appliance installation or have any inquiries, please contact us using the below email address. Our experts will reach out to you promptly.
  </p>
  <p>
    In the email, please include the following information:
  </p>
  <ul>
    <li>Your reason for contacting us.</li>
    <li>Your address for service.</li>
    <li>Your contact number.</li>
    <li>Any specific company/manufacturer expertise needed.</li>
  </ul>
  <button className='submit-auth-btn'>
    <a href="mailto:hvinod55@yahoo.co.in">
      Send Mail
    </a>
  </button>
</div>

    </div>
  );
}

export default Expertise;
