import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import logo from '../../assets/images/Untitled.png'
import Styles from "./cart.module.css"

import Order from '../../components/Order/Order'
const Cart = () => {

    return (
        <div>
            <div className={Styles.cart_header}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className={Styles.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={Styles.secure}>
                        <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="" />
                        <p>100% SECURE</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6 p-0 mt-4">
                        <div className={Styles.pin_code}>
                            <p>Check delivery time & services</p>
                            <button>ENTER PIN CODE</button>
                            <div className={Styles.enter_pin_code_area}>
                                <input type="number" />
                            </div>
                        </div>
                        <div className={Styles.offers}>
                            <div className={Styles.offer_heading}>
                                <i class="las la-tags"></i>
                                <p>Available offers</p>
                            </div>
                            <div className={Styles.avail_offers}>
                                <ul className={Styles.offer_list}>
                                    <li>10% Instant Discount with HDFC Bank Credit Cards on a min spend of Rs 3,000. TCA</li>
                                    <li>10% Instant Discount with HDFC Bank Credit Cards on a min spend of Rs 3,000. TCA</li>
                                    <li>10% Instant Discount with HDFC Bank Credit Cards on a min spend of Rs 3,000. TCA</li>
                                    <li>10% Instant Discount with HDFC Bank Credit Cards on a min spend of Rs 3,000. TCA</li>
                                    <li>10% Instant Discount with HDFC Bank Credit Cards on a min spend of Rs 3,000. TCA</li>
                                    <li>10% Instant Discount with HDFC Bank Credit Cards on a min spend of Rs 3,000. TCA</li>
                                    <li>10% Instant Discount with HDFC Bank Credit Cards on a min spend of Rs 3,000. TCA</li>
                                </ul>
                            </div>
                            <div className={Styles.show_more_offers}>
                                <p>Show More</p>
                                <i class="las la-angle-down"></i>
                            </div>
                        </div>
                        <div className={Styles.items}>
                            <div className={Styles.selected_items}>
                                <div className={Styles.no_of_items}>
                                    <input type="checkbox" />
                                    <p>0/3 Items Selected</p>
                                </div>
                                <div className={Styles.remove_all}>
                                    <p>Remove</p>
                                </div>
                            </div>
                            <Order />
                            <Order />
                            <Order />
                        </div>
                    </div>
                    <div className="col-4 ml-4">
                        <div className={Styles.prices}>
                            <div className={Styles.coupons}>
                                <div className={Styles.coupon_code}>
                                    <i class="las la-tag"></i>
                                    <input type="text" placeholder="Apply Coupons" />
                                </div>
                                <div className={Styles.apply_button}>
                                    <button>APPLY</button>
                                </div>
                            </div>
                            <div className={Styles.price_details}>
                                <div className={Styles.header}>
                                    <p>PRICE DETAILS (1 Item)</p>
                                </div>
                                <div className={Styles.cost}>
                                    <div className={Styles.mrp}>
                                        <p>Total MRP</p>
                                        <p>₹179</p>
                                    </div>
                                    <div className={Styles.coupon_discount}>
                                        <p>Coupon Discount</p>
                                        <p>-₹40</p>
                                    </div>
                                    <div className={Styles.delivery}>
                                        <p>Delivery charges</p>
                                        <p>₹49</p>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.total_price}>
                                <p>Total Amount</p>
                                <p>₹179</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
