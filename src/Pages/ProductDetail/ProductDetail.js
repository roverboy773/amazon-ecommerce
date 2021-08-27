import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import roadmap_arrow from '../../root/images/roadmap_arrow.png'
import stars from '../../root/images/stars.png'
import puma_shoes from '../../root/images/puma_shoes.png'
import shoe_varient from '../../root/images/shoe_varient.png'
import top_view from '../../root/images/top_view.png'

import '../../root/css/Indiproduct.css'
const ProductDetail = () => {
    return (
        <div>
            <Header/>

            <section className="roadmap">
                <div className="container">
                    <div className="roadmap_wrapper">
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

            <section className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="left_wrapper">
                                <div className="best">
                                    <p className="best_seller">Best Seller</p>
                                </div>
                                <img src={puma_shoes} alt="" />
                            </div>
                            <div className="views_wrapper">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="view top_view">
                                            <img src={top_view} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="view bottom_view">
                                            <img src={top_view} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="view back_view">
                                            <img src={top_view} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="view more">
                                            <img src={top_view} alt="" />
                                             <p className="remaining">+2 More</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="prod_details">
                                    <p className="detail_header">Product Details</p>
                                    <p className="detail_content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis et ducimus quidem recusandae, aspernatur architecto ullam odio similique nostrum ab inventore. Voluptatum labore nihil necessitatibus quam aut officia perferendis omnis tenetur? Vero illum ipsam nemo, cum aliquid unde eligendi rem ullam autem magni velit quisquam quis omnis molestias pariatur quo.</p>
                                </div>

                        </div>
                        <div className="col-6">
                            <div className="right_wrapper">
                                <div className="options">
                                    <p className="opt1 active">Products Details</p>
                                    <p className="opt2">Delivery</p>
                                    <p className="opt3">Reviews</p>
                                    <p className="opt4">FAQ</p>
                                </div>
                                <div className="prod_info">
                                    <h3>Puma</h3>
                                    <p>Unisex Multicoloured STYLE RIDER PLAY ON Colour Sneakers</p>
                                </div>
                                <div className="prod_money">
                                    <h3>₹  1799.00</h3>
                                    <p className="original">₹2499.00</p>
                                    <p className="offer">(50% OFF)</p>
                                </div>
                                <div className="prod_review">
                                    <img src={stars} alt="" />
                                    <p>28789 reviews</p>
                                </div>
                                <h4 className="size">Select Size (UK Size)</h4>
                                <h4 className="colour">Colour: <span>Cream, Waffle</span> </h4>
                                <div className="varients">
                                    <div className="row">
                                        <div className="col-2"> <img src={shoe_varient} alt="" /></div>
                                        <div className="col-2"> <img src={shoe_varient} alt="" /></div>
                                        <div className="col-2"> <img src={shoe_varient} alt="" /></div>
                                        <div className="col-2"> <img src={shoe_varient} alt="" /></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2"> <img src={shoe_varient} alt="" /></div>
                                        <div className="col-2"> <img src={shoe_varient} alt="" /></div>
                                        <div className="col-2"> <img src={shoe_varient} alt="" /></div>

                                    </div>
                                </div>
                                <div className="prod_details">
                                    <p className="detail_header">Product Details</p>
                                    <p className="detail_content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis et ducimus quidem recusandae, aspernatur architecto ullam odio similique nostrum ab inventore. Voluptatum labore nihil necessitatibus quam aut officia perferendis omnis tenetur? Vero illum ipsam nemo, cum aliquid unde eligendi rem ullam autem magni velit quisquam quis omnis molestias pariatur quo.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default ProductDetail
