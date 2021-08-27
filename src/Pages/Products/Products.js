import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Product from '../../components/Product/Product'
import Filter from '../../components/Filter/Filter'

import Styles from './products.module.css'

import roadmap_arrow from '../../assets/images/roadmap_arrow.png'
import downArrow from '../../assets/images/downArrow.png'
import shoes from '../../assets/images/shoes.png'
import stars from '../../assets/images/stars.png'
import cross from '../../assets/images/cross.png'
const Products = () => {
    return (
        <div className="">

          <Header/>

            <section className={`${Styles.roadmap}`}>
                <div className="container">
                    <div className={`${Styles.roadmap_wrapper}`}>
                        <span className={`${Styles.home}`}>Home</span>
                        <img src={roadmap_arrow} alt="" />
                        <span>Men</span>
                        <img src={roadmap_arrow} alt="" />
                        <span>Footwear</span>
                        <img src={roadmap_arrow} alt="" />
                        <span>Casual Shoes</span>
                    </div>
                </div>
            </section>

            <section className="all_products">
                <div className="container">
                    <div className={`${Styles.type_of_products}`}>
                        <div className="row align-items-center">
                            <div className="col-4">
                                <h1>Casual Shoes For Men</h1>
                            </div>
                            <div className="col-2">
                                <p className="mb-0">12491 items</p>
                            </div>
                        </div>


                    </div>

                    <div className={`${Styles.filters_wrapper}`}>
                        <div className="row">
                            <div className="col-3">
                                <h4 className="f_heading">FILTERS</h4>
                            </div>
                            <div className="col-1">
                                <div className={`${Styles.filter}`}>
                                    <p>Ankle Height</p>
                                    <img src={downArrow} alt="" />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className={`${Styles.filter}`}>
                                    <p>Ankle Height</p>
                                    <img src={downArrow} alt="" />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className={`${Styles.filter}`}>
                                    <p>Ankle Height</p>
                                    <img src={downArrow} alt="" />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className={`${Styles.filter}`}>
                                    <p>Ankle Height</p>
                                    <img src={downArrow} alt="" />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className={`${Styles.filter}`}>
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
                    <div className="col-3 border m-0 p-0">
                        
                    <Filter/>
                       <Filter/>
                       <Filter/>
                   
                    </div>

                    <div className="col border">
                    <div className="container">
                        <div className={`${Styles.selected_filters}`}>
                            <div className={`${Styles.individual_filter}`}>
                                <p class={`${Styles.filter_name}`}>Nike</p>
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

                        <div className={`${Styles.pagination}`}>
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <div className={`${Styles.page_indicator}`}>
                                        <p>Page 2 Of 26</p>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className={`${Styles.page_number_wrapper}`}>
                                        <div className={`${Styles.pagination_left_arrow}`}>
                                            <img src={roadmap_arrow} alt="" />
                                        </div>
                                        <div className={`${Styles.page_number}`}>
                                            <ul >
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li className={`${Styles.active}`}>4</li>
                                                <li>5</li>
                                                <li>6</li>
                                                <li>7</li>
                                                <li>8</li>
                                                <li>9</li>
                                                <li>10</li>
                                            </ul>
                                        </div>
                                        <div className={`${Styles.pagination_right_arrow}`}>
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

            <Footer/>
        </div>
    )
}

export default Products
