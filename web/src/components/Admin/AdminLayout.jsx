import React from "react";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import {Outlet} from 'react-router-dom';
function AdminLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default AdminLayout;
