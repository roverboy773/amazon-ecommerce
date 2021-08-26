import React from 'react'

import '../../root/css/products.css'

import shoes from '../../root/images/shoes.png'
import stars from '../../root/images/stars.png'
const Product = () => {
    return (
        <div className="product">
            <img src={shoes} alt="" className="prod_image" />
            <div className="product_info">
                <h5>Nike Zoom KD9</h5>
                <span className="type">Men Casual</span>  <span className="offer">(50% OFF)</span>
                <img src={stars} alt="" className="stars_img" />
                <span className="reviews">28504 reviews</span><br />
                <span className="offer_price">₹1050.00</span>  <span className="original">₹1999.00</span>
            </div>
        </div>
    )
}

export default Product
