import React from 'react'
import BBlogo from '../../root/images/logoBB.png'
import cart from '../../root/images/cart.png'
import heart from '../../root/images/heart.png'
import location from '../../root/images/location.png'
import person from '../../root/images/person.png'
import search from '../../root/images/search.png'

import '../../root/css/main.css'
import '../../root/css/navigation.css'

const Upperheader = () => {
    return (
        <div className="container mt-4">
        <div className="row justify-content-between align-items-center">
            <div className="col-1">
                <img src={BBlogo} alt="" className="logo_image_header" />
            </div>
            <div className="col-6">
                <div class="navigation_input_wrapper">
                            <img src={search} alt=""  className=""/>
                            <input type="text" />
                </div>
            </div>
            <div className="col-2">
                <div className="d-flex align-items-center justify-content-center">
                  
                        <img src={location} alt="" className="location_img"/>
                    
                   
                        <div className="ml-1">
                          <p className="mb-0">Deliver to john</p> 
                          <p className="mb-0">Chennai 640060</p>  
                        </div>
                    
                </div>
            </div>
            <div className="col-1">
                <div className="d-flex align-items-center justify-content-center">
                   
                        <img src={heart} alt="" className="heart"/>
                   
                    <p className="mb-0">WISHLIST</p>
                   
                </div>
            </div>

            <div className="col-1 d-flex align-items-center justify-content-center ">
   
                   <img src={person} alt="" className="person"/>
                   <p className="mb-0">Profile</p>  
                
            </div>
            <div className="col-1 d-flex align-items-center justify-content-center">
  
                        <img src={cart} alt="" className="cart"/>
                    <p className="mb-0">Cart</p> 

            </div>
        </div>
        </div>
    )
}

export default Upperheader
