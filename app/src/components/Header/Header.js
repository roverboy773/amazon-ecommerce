import React from 'react'
import Upperheader from './UpperHeader'
import AllCategories from './AllCategories'
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <Upperheader/>
            <AllCategories/>
        </div>
    )
}

export default Header
