import React from 'react';

const TopNav = () => {
  return (
    <div className="bg-white w-full sticky top-2 shadow-md flex justify-between px-7 from-neutral-500 h-[67px]">
      <p className="text-4xl text-[#04045e] font-semibold">Cigniti</p>
      <button className="w-52 flex h-12 my-1.5 rounded-lg justify-between px-1.5 py-[5px] border border-gray-200">
        <p className='py-1'><span className='text-gray-400'>Hi,</span> Mallik</p>
        <span className="h-9 w-9 py-1 font-semibold text-teal-500 rounded-lg bg-teal-200">S</span>
      </button>
    </div>
  );
};

export default TopNav;
