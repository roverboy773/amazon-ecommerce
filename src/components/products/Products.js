import React from 'react'

import Navigation from '../navigation/Navigation'
import Footer from '../footer/Footer'
import Product from '../Product/Product'

import '../../root/css/products.css'

import roadmap_arrow from '../../root/images/roadmap_arrow.png'
import downArrow from '../../root/images/downArrow.png'
import shoes from '../../root/images/shoes.png'
import stars from '../../root/images/stars.png'
import cross from '../../root/images/cross.png'
const Products = () => {
    return (
        <div className="">
            <Navigation></Navigation>

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
                    </div>
                </div>
            </section>

            <section className="extra_info">
                <div className="container">
                    <div className="header_info">
                        <div className="row align-items-center">
                            <div className="col-4">
                                <h1>Casual Shoes For Men</h1>
                            </div>
                            <div className="col-2">
                                <p className="mb-0">12491 items</p>
                            </div>
                        </div>


                    </div>

                    <div className="filters_wrapper">
                        <div className="row">
                            <div className="col-3">
                                <h4 className="f_heading">FILTERS</h4>
                            </div>
                            <div className="col-1">
                                <div className="filter">
                                    <p>Ankle Height</p>
                                    <img src={downArrow} alt="" />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="filter">
                                    <p>Ankle Height</p>
                                    <img src={downArrow} alt="" />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="filter">
                                    <p>Ankle Height</p>
                                    <img src={downArrow} alt="" />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="filter">
                                    <p>Ankle Height</p>
                                    <img src={downArrow} alt="" />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="filter">
                                    <p>Ankle Height</p>
                                    <img src={downArrow} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="products_wrapper">
                <div className="row ">
                    <div className="col-3 border">
                        <div className="more_filters">
                            <h4 >BRAND</h4>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <p>Puma</p>
                                </div>
                                <p>1223</p>
                            </div>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <p>Puma</p>
                                </div>
                                <p>1223</p>
                            </div>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <p>Puma</p>
                                </div>
                                <p>1223</p>
                            </div>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <p>Puma</p>
                                </div>
                                <p>1223</p>
                            </div>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <p>Puma</p>
                                </div>
                                <p>1223</p>
                            </div>

                            <p class="plusmore">+230 More</p>

                        </div>


                        <div className="more_filters">
                            <h4 >BRAND</h4>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <p>Puma</p>
                                </div>
                                <p>1223</p>
                            </div>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <p>Puma</p>
                                </div>
                                <p>1223</p>
                            </div>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <p>Puma</p>
                                </div>
                                <p>1223</p>
                            </div>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <p>Puma</p>
                                </div>
                                <p>1223</p>
                            </div>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <p>Puma</p>
                                </div>
                                <p>1223</p>
                            </div>



                        </div>


                        <div className="more_filters">
                            <h4 >BRAND</h4>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <div className="filter_color black"></div>
                                    <p>Black</p>
                                </div>
                                <p>1223</p>
                            </div>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <div className="filter_color brown"></div>
                                    <p>Brown</p>
                                </div>
                                <p>1223</p>
                            </div>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <div className="filter_color navy_blue"></div>
                                    <p>Navy Blue</p>
                                </div>
                                <p>1223</p>
                            </div>
                            <div className="more_filters_content">
                                <div className="filter_name">
                                    <input type="checkbox" />
                                    <div className="filter_color yellow"></div>
                                    <p>Yellow</p>
                                </div>
                                <p>1223</p>
                            </div>


                            <p class="plusmore">+230 More</p>

                        </div>

                    </div>

                    <div className="col border">
                    <div className="container">
                        <div className="selected_filters ">
                            <div className="indi_filter">
                                <p class="filter_name">Nike</p>
                                <img src={cross} alt="" />
                            </div>
                        </div>

                        <div className="products">
                           
                            <div className="row">
                                <div className="col-3">
                                    <Product/>
                                </div>
                                <div className="col-3">
                                    <Product/>
                                </div>
                                <div className="col-3">
                                    <Product/>
                                </div>
                                <div className="col-3">
                                    <Product/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <Product/>
                                </div>
                                <div className="col-3">
                                    <Product/>
                                </div>
                                <div className="col-3">
                                    <Product/>
                                </div>
                                <div className="col-3">
                                    <Product/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <Product/>
                                </div>
                                <div className="col-3">
                                    <Product/>
                                </div>
                                <div className="col-3">
                                    <Product/>
                                </div>
                                <div className="col-3">
                                    <Product/>
                                </div>
                            </div>

                        </div>

                        <div className="pagination">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <div className="page_indicator">
                                        <p>Page 2 Of 26</p>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="page_number_wrapper">
                                        <div className="left_arrow">
                                            <img src={roadmap_arrow} alt="" />
                                        </div>
                                        <div className="page_number">
                                            <ul >
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li className="active">4</li>
                                                <li>5</li>
                                                <li>6</li>
                                                <li>7</li>
                                                <li>8</li>
                                                <li>9</li>
                                                <li>10</li>
                                            </ul>
                                        </div>
                                        <div className="right_arrow">
                                            <img src={roadmap_arrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    )
}

export default Products
