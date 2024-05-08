import React from 'react';
import connectImage from '../photos/Rectangle 29.png';

const LeftSection = () => {
  return (
    <div className="left-section bg-[#E88073] p-12 rounded-t-xl rounded-b-none">
      <h2 className='text-4xl text-white mb-4'>Connect to new people through new places!</h2>
      <img src={connectImage} alt="Connect" className='max-w-full rounded-xl' style={{ maxWidth: '400px' }} />
      <div className="mt-6">
        <h2 className='text-4xl text-white'>See and share what you're up to!</h2>
      </div>
    </div>
  );
};

export default LeftSection;