import { Outlet } from 'react-router-dom';

import React from 'react';
import Header from './Header';
import Footer from './Footer/index';
import Panel from './LeftPanel';

const Layout = () => {
  return (
    <div className="min-h-full dark:bg-black dark:text-white">
      <Header />
      <main className="flex flex-col md:flex-row">
        <Panel />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
