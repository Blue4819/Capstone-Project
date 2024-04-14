// LeftSection.js
import React from 'react';
import connectImage from '../images/connect.jpg';
import shareImage from '../images/share.jpg';

const LeftSection = () => {
  return (
    <div className="left-section" style={{ backgroundColor: 'rgba(232, 128, 115, 1)' }}>
      <div>
        <h2>Connect to new people through new places!</h2>
        <img src={connectImage} alt="Connect" />
      </div>
      <div>
        <h2>See and share what you're up to!</h2>
        <img src={shareImage} alt="Share" />
      </div>
    </div>
  );
};

export default LeftSection;
