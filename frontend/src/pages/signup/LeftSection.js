import React from 'react';
import connectImage from '../photos/Rectangle.jpeg';

const LeftSection = () => {
  return (
    <div className="left-section rounded-xl bg-[#E88073] p-8 flex flex-col items-center mr-20">
      <h2 className='mt-4 text-4xl'>Connect to new people through new places!</h2>
      <img src={connectImage} alt="Connect" className='mt-6 max-w-full rounded-xl' style={{ width: '400px', height: '400px' }} /> {/* Adjusted height to 1000px */}
      <div className="mt-6">
        <h2 className='text-4xl'>See and share what you're up to!</h2>
      </div>
    </div>
  );
};

export default LeftSection;
