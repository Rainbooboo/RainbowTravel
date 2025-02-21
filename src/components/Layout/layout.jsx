import React from 'react';
import  './Layout.scss'
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='outlet'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
