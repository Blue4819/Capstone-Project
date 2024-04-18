import React from 'react';

const RightSection = () => {
  return (
    <div className="right-section">
      <h1 className='text-6xl font-bold'>Join Holidate!</h1>
      <p className='text-2xl font-medium mt-4'>Create an account and get started with your journey!</p>

      <div className="input-group mt-6 grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstName" className='text-lg text-semibold'>First Name</label>
          <input type="text" id="firstName" className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className='text-lg'>Last Name</label>
          <input type="text" id="lastName" className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="loginId" className='text-lg'>Username</label>
          <input type="email" id="loginId"className= 'w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]'/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className='text-lg'>Email</label>
          <input type="email" id="email"  className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dob" className='text-lg'>Date of Birth</label>
          <input type="date" id="dob"  className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="location" className='text-lg'>Location</label>
          <input type="text" id="location"  className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className='text-lg'>Password</label>
          <input type="password" id="password" className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className='text-lg'>Confirm Password</label>
          <input type="password" id="confirmPassword" className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
      </div>
      <button className="rounded-full py-4 px-20 bg-[#E85A50] text-white font-bold hover:bg-[#C7D6A1]">
        Create Account
      </button>
    </div>
  );
};

export default RightSection;
