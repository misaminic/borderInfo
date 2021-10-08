import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }: any) => {
  return (
    <>
      <Navigation />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
