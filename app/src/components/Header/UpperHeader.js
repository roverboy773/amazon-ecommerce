import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/Untitled.png'
import cart from '../../assets/images/cart.png'
import heart from '../../assets/images/heart.png'
import location from '../../assets/images/location.png'
import person from '../../assets/images/person.png'
import search from '../../assets/images/search.png'

import Styles from './UpperHeader.module.css'

const UpperHeader = () => {
    return (
        <div className="">
          <div className={`${Styles.upper}`}>
            <div className="row justify-content-between align-items-center">
                <div className="col-1">
                    <Link to="/"><img src={logo} alt="BB Logo" className={`${Styles.logo}`} /></Link>
                </div>
                <div className="col-6">
                    <div className={`${Styles.header_input_wrapper}`}>
                        <img src={search} alt="Magnifying Glass icon" className="" />
                        <input type="text" placeholder="Search for products and more"/>
                    </div>
                </div>
                <div className="col-2">
                    <div className="d-flex align-items-center justify-content-center">

                        <img src={location} alt="Location icon" className={`${Styles.header_location_img}`} />


                        <div className={`${Styles.delivery}`}>
                            <p className="mb-0">Deliver to john</p>
                            <p className="mb-0">Chennai 640060</p>
                        </div>

                    </div>
                </div>
                <div className="col-1">
                    <div className="d-flex align-items-center justify-content-center">
                    <div className={`${Styles.nav_link}`}>
                        <Link to="/wishlist">
                           
                                <img src={heart} alt="Heart icon" className={`${Styles.heart}`} />

                                <p className={`${Styles.wishlist}`}>WISHLIST</p>
                           

                        </Link>
                        </div>
                    </div>
                </div>

                <div className="col-1 d-flex align-items-center justify-content-center ">
                <div className={`${Styles.nav_link}`}>
                    <Link to="/profile">
                     
                            <img src={person} alt="User icon" className={`${Styles.person}`} />
                            <p className={`${Styles.profile}`}>Profile</p>
                       
                    </Link>
                    </div>

                </div>
                <div className="col-1 d-flex align-items-center justify-content-center">
                <div className={`${Styles.nav_link}`}>
                    <Link to="/cart">
                       
                            <img src={cart} alt="Cart Icon" className={`${Styles.cart}`} />
                            <p className={`${Styles.cart}`}>Cart</p>
                      
                    </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default UpperHeader
