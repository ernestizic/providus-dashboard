import React, { useEffect } from 'react'
import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  // screen breakpoint
	const breakpoint = 820

  useEffect(()=> {
    // Set screen width as window resizes
		const handleWindowResize = () => { setScreenWidth(window.innerWidth) }
		window.addEventListener('resize', handleWindowResize)

    if (screenWidth > breakpoint) {
			setShowSidebar(true)
		} else {
			setShowSidebar(false)
		}
    // Remove event listener
		return () => window.removeEventListener('resize', handleWindowResize)
  }, [screenWidth])

  useEffect(()=> {
    toggleSidebar()
    // eslint-disable-next-line 
  }, [showSidebar])


  const toggleSidebar =()=> {
    const nav = document.querySelector(".sidebar");
    const main = document.querySelector(".main-container")
    if(showSidebar) {
      nav.style.width = "255px";
      main.style.marginLeft = "255px";
      if(screenWidth < breakpoint) {
        main.style.marginRight = "-255px";
      }
    } else {
      nav.style.width = "0px";
      main.style.margin = "0";
    }
  }


  return (
    <div className='dashboard-layout'>
        <Sidebar />
        <div className='main-container'>
            <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout