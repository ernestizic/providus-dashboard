import { Link, NavLink } from 'react-router-dom';

import Logo from '../providus.svg'
import Dropdown from './Dropdown';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='logo-container'>
            <Link to='/'>
                <img src={Logo} alt='providus logo' />
            </Link>
        </div>

        <div className='menu'>
            <ul>
                <li>
                    <NavLink to='/'>
                        <i className="fa-solid fa-house"></i>
                        Home
                    </NavLink>
                </li>

                <li>
                    <Dropdown defaultLinkTitle={'Account'} linkIcon={<i className="fa-solid fa-users"></i>} >
                        <NavLink to='/new-account'>New Account</NavLink>
                        <NavLink to='/status'>Status</NavLink>
                    </Dropdown>
                </li>

                <li>
                    <NavLink to='/report'>
                        <i className="fa-solid fa-chart-simple"></i>
                        Report
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar