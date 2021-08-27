import React from 'react'
import Upperheader from './UpperHeader'
import Lowerheader from './AllCategories'
import '../../root/css/main.css'
import '../../root/css/navigation.css'
const Header = () => {
    return (
        <div>
            <Upperheader></Upperheader>
            <Lowerheader></Lowerheader>
        </div>
    )
}

export default Header
