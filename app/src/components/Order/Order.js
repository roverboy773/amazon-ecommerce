import React from 'react'

import Styles from './Order.module.css'
const Order = () => {
    return (
        <div className={Styles.order_wrapper} >
            <div className={Styles.order}>
                <div className={Styles.order_img}>
                    <img src="https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/13958862/2021/10/12/9b844312-18f9-4095-8abc-b0fc2765db671634020728790-Living-scapes-by-Pantaloons-Set-Of-2-Blue--Pink-Solid-550-GS-1.jpg"
                        alt="" />
                </div>
                <div className={Styles.order_details} >
                    <div className={Styles.order_name}>
                        <div className={Styles.order_name_primary}>
                            <p>Living scapes by Pantaloons </p>
                        </div>
                        <div className={Styles.order_name_secondary}>
                            <p>Set Of 2 Blue & Pink Solid 550 GSM Face Towels</p>
                        </div>
                    </div>
                    <div className={Styles.soldby} >
                        <p>Sold by: Westbury Holding Pvt Ltd_Pantaloons</p>
                    </div>
                    <div className={Styles.qty_size} >
                        <div className={Styles.size}>
                             <span>Size: </span>
                             <select name="" id="">
                                 <option value="">Select a Size</option>
                             </select>
                        </div>
                        <div className={Styles.qty}>
                             <span>Qty: </span>
                             <select name="" id="">
                                  <option value="">Qty</option>
                             </select>
                        </div>
                    </div>
                    <div className={Styles.price} >
                        <p>₹179</p>
                    </div>
                </div>
            </div>
            <div className={Styles.remove} >
                <i class="las la-times" > </i>
            </div>
        </div>

    )
}

export default Order