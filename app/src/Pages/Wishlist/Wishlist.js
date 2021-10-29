import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Product from '../../components/Product/Product'
import Styles from './wishlist.module.css'

const Wishlist = () => {
    return (
        <div>
            <Header></Header>
<div className="container">
            <section className={`${Styles.info}`}>
                <h5 className={`${Styles.heading}`}>My Wishlist</h5>
                <p className={`${Styles.number_of_item}`}>3 items</p>
            </section>

            <div className={`${Styles.wishlist_products}`}>
                <div className="row">
                    <div className="col-3">
                        <Product></Product>
                    </div>
                    <div className="col-3">
                        <Product></Product>
                    </div>
                    <div className="col-3">
                        <Product></Product>
                    </div>
                    <div className="col-3">
                        <Product></Product>
                    </div>
                </div>
            </div>
</div>
            <Footer></Footer>
        </div>
    )
}

export default Wishlist
