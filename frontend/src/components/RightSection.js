// RightSection.js
import React from 'react';

const RightSection = () => {
  return (
    <div className="right-section">
      <h2>Join Holidate!</h2>
      <p>Create an account and get started with your journey!</p>
      <div className="input-group">
        <input type="text" placeholder="First Name" style={{ backgroundColor: 'rgba(234, 232, 220, 1)' }} />
        <input type="text" placeholder="Last Name" style={{ backgroundColor: 'rgba(234, 232, 220, 1)' }} />
        <input type="email" placeholder="Email" style={{ backgroundColor: 'rgba(234, 232, 220, 1)' }} />
        <input type="date" placeholder="Date of Birth" style={{ backgroundColor: 'rgba(234, 232, 220, 1)' }} />
        <input type="text" placeholder="Location" style={{ backgroundColor: 'rgba(234, 232, 220, 1)' }} />
        <input type="password" placeholder="Password" style={{ backgroundColor: 'rgba(234, 232, 220, 1)' }} />
        <input type="password" placeholder="Confirm Password" style={{ backgroundColor: 'rgba(234, 232, 220, 1)' }} />
      </div>
      <button style={{ backgroundColor: 'rgba(232, 90, 80, 1)', color: 'white' }}>Create Account</button>
    </div>
  );
};

export default RightSection;
