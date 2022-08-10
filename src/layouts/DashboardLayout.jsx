import React from 'react'

import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div>
        <Sidebar />
        <div className='main-container'>
            <Header />
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout