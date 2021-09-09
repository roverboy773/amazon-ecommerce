import React from 'react'

import Styles from './Product.module.css'

import shoes from '../../assets/images/shoes.png'
import stars from '../../assets/images/stars.png'

const Product = () => {
    return (
        <div className={`${Styles.product}`}>
            <img src={shoes} alt="Shoe image" className={`${Styles.prod_image}`} />
            <div className={`${Styles.product_info}`}>
                <h5>Nike Zoom KD9</h5>
                <div className="d-flex align-items-center ">
                    <p className={`${Styles.prod_type}`}>Men Casual</p>
                    <p className={`${Styles.prod_offer}`}>(50% OFF)</p>
                </div>
                <div className='d-flex align-items-center'>
                    <img src={stars} alt="" className={`${Styles.prod_stars}`} />
                    <p className={`${Styles.prod_reviews}`}>28504 reviews</p>
                </div>
                <div className='d-flex align-items-center'>
                    <p className={`${Styles.prod_offer_price}`}>₹1050.00</p>
                    <p className={`${Styles.prod_original_price}`}>₹1999.00</p>
                </div>

            </div>
        </div>
    )
}

export default Product
