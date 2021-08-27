import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import roadmap_arrow from '../../assets/images/roadmap_arrow.png'
import stars from '../../assets/images/stars.png'
import puma_shoes from '../../assets/images/puma_shoes.png'
import shoe_varient from '../../assets/images/shoe_varient.png'
import top_view from '../../assets/images/top_view.png'

import Styles from './ProductDetail.module.css'
const ProductDetail = () => {
    return (
        <div>
            <Header />

            <section className={`${Styles.roadmap}`}>
                <div className="container">
                    <div className={`${Styles.roadmap_wrapper}`}>
                        <span className="home">Home</span>
                        <img src={roadmap_arrow} alt="" />
                        <span>Men</span>
                        <img src={roadmap_arrow} alt="" />
                        <span>Footwear</span>
                        <img src={roadmap_arrow} alt="" />
                        <span>Casual Shoes</span>
                        <img src={roadmap_arrow} alt="" />
                        <span>Puma Casual Shoes</span>
                    </div>
                </div>
            </section>

            <section className="details">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-6">
                            <div className={`${Styles.product_main_image_wrapper}`}>
                                <div className={`${Styles.best}`}>
                                    <p className={`${Styles.best_seller}`}>Best Seller</p>
                                </div>
                                <img src={puma_shoes} alt="" />
                            </div>
                            <div className={`${Styles.product_views_wrapper}`}>
                                <div className="row">
                                    <div className="col-3">
                                        <div className={`${Styles.product_view} ${Styles.top_view}`}>
                                            <img src={top_view} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={`${Styles.product_view} ${Styles.bottom_view}`}>
                                            <img src={top_view} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={`${Styles.product_view} ${Styles.back_view}`}>
                                            <img src={top_view} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={`${Styles.product_view} ${Styles.more}`}>
                                            <img src={top_view} alt="" />
                                            <p className={`${Styles.remaining}`}>+2 More</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={`${Styles.prod_details}`}>
                                <p className={`${Styles.detail_header}`}>Product Details</p>
                                <p className={`${Styles.detail_content}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis et ducimus quidem recusandae, aspernatur architecto ullam odio similique nostrum ab inventore. Voluptatum labore nihil necessitatibus quam aut officia perferendis omnis tenetur? Vero illum ipsam nemo, cum aliquid unde eligendi rem ullam autem magni velit quisquam quis omnis molestias pariatur quo.</p>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className={`${Styles.product_details_wrapper}`}>
                                <div className={`${Styles.options}`}>
                                    <p className={`${Styles.opt1} ${Styles.active}`}>Products Details</p>
                                    <p className={`${Styles.opt2}`}>Delivery</p>
                                    <p className={`${Styles.opt3}`}>Reviews</p>
                                    <p className={`${Styles.opt4}`}>FAQ</p>
                                </div>
                                <div className={`${Styles.prod_info}`}>
                                    <h3>Puma</h3>
                                    <p>Unisex Multicoloured STYLE RIDER PLAY ON Colour Sneakers</p>
                                </div>
                                <div className={`${Styles.prod_money}`}>
                                    <h3>₹  1799.00</h3>
                                    <p className={`${Styles.original}`}>₹2499.00</p>
                                    <p className={`${Styles.offer}`}>(50% OFF)</p>
                                </div>
                                <div className={`${Styles.prod_review}`}>
                                    <img src={stars} alt="" />
                                    <p>28789 reviews</p>
                                </div>
                                <h4 className={`${Styles.size}`}>Select Size (UK Size)</h4>
                                <h4 className={`${Styles.colour}`}>Colour: <span>Cream, Waffle</span> </h4>

                                <div className={`${Styles.product_varients}`}>
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="varient1">
                                                <img src={shoe_varient} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="varient2">
                                                <img src={shoe_varient} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="varient3">
                                                <img src={shoe_varient} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="varient4">
                                                <img src={shoe_varient} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="varient5">
                                                <img src={shoe_varient} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="varient6">
                                                <img src={shoe_varient} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="varient7">
                                                <img src={shoe_varient} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                               
                                <div className={`${Styles.prod_details}`}>
                                    <p className="detail_header">Product Details</p>
                                    <p className={`${Styles.detail_content}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis et ducimus quidem recusandae, aspernatur architecto ullam odio similique nostrum ab inventore. Voluptatum labore nihil necessitatibus quam aut officia perferendis omnis tenetur? Vero illum ipsam nemo, cum aliquid unde eligendi rem ullam autem magni velit quisquam quis omnis molestias pariatur quo.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ProductDetail
