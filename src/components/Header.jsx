import React from 'react'
import Avatar from '../avatar.jpg'

const Header = () => {
  return (
    <div className='dashboard-header'>
        <div className='bars-container'>
            <i className="fa-solid fa-bars"></i>
        </div>

        <div className='dashboard-actions'>
            <i className="fa-solid fa-circle-question"></i>
            <i className="fa-solid fa-bell"></i>
            <div className='user'>
                <img src={Avatar} alt='user avatar' />
                <div className="user-detail">
                    <p className='name'>David Tomiwa</p>
                    <p>CSO</p>
                </div>
                <i className="fa-solid fa-angle-down"></i>
            </div>
        </div>
    </div>
  )
}

export default Header