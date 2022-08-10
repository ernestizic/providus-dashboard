import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Caret from '../caret-icon.svg'

const Dropdown = (props) => {
    const [showDropdownContent, setShowDropdownContent] = useState(false)

  return (
    <div className='dropdown'>
        <Link to='#' onClick={()=> setShowDropdownContent(!showDropdownContent)}>
            {props.linkIcon}
            {props.defaultLinkTitle}
            <img src={Caret} alt='caret' className={showDropdownContent ? 'rotate' : ''} />
        </Link>

        {showDropdownContent && (
            <div className='dropdown-content'>
                {props.children}
            </div>
        )}
    </div>
  )
}

export default Dropdown