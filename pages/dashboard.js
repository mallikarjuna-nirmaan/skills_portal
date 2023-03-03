import SideNav from '@/components/SideNav';
import TopNav from '@/components/TopNav';
import React from 'react';

const dashboard = () => {
  return (
    <div className="flex">
      <SideNav />
      <TopNav />
    </div>
  );
};

export default dashboard;
