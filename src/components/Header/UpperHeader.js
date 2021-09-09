import React from 'react'
import BBlogo from '../../assets/images/logoBB.png'
import cart from '../../assets/images/cart.png'
import heart from '../../assets/images/heart.png'
import location from '../../assets/images/location.png'
import person from '../../assets/images/person.png'
import search from '../../assets/images/search.png'

import Styles from './UpperHeader.module.css'

const UpperHeader = () => {
    return (
        <div className="container mt-4">
        <div className="row justify-content-between align-items-center">
            <div className="col-1">
                <img src={BBlogo} alt="BB Logo" className={`${Styles.logo}`} />
            </div>
            <div className="col-6">
                <div className={`${Styles.header_input_wrapper}`}>
                            <img src={search} alt="Magnifying Glass icon"  className=""/>
                            <input type="text" />
                </div>
            </div>
            <div className="col-2">
                <div className="d-flex align-items-center justify-content-center">
                  
                        <img src={location} alt="Location icon" className={`${Styles.header_location_img}`}/>
                    
                   
                        <div className="">
                          <p className="mb-0">Deliver to john</p> 
                          <p className="mb-0">Chennai 640060</p>  
                        </div>
                    
                </div>
            </div>
            <div className="col-1">
                <div className="d-flex align-items-center justify-content-center">
                   
                        <img src={heart} alt="Heart icon" className={`${Styles.heart}`}/>
                   
                    <p className="mb-0">WISHLIST</p>
                   
                </div>
            </div>

            <div className="col-1 d-flex align-items-center justify-content-center ">
   
                   <img src={person} alt="User icon" className={`${Styles.person}`}/>
                   <p className="mb-0">Profile</p>  
                
            </div>
            <div className="col-1 d-flex align-items-center justify-content-center">
  
                        <img src={cart} alt="Cart Icon" className={`${Styles.cart}`}/>
                    <p className="mb-0">Cart</p> 

            </div>
        </div>
        </div>
    )
}

export default UpperHeader
