import React from 'react'

import young_man from '../../assets/images/young_man.png'
import young_women from '../../assets/images/young_women.png'
import beauty_product from '../../assets/images/beauty_product.png'
import light_blue_man from '../../assets/images/light_blue_man.png'
import green_tshirt from '../../assets/images/greentshirt.png'
import red_kurta from '../../assets/images/red_kurta.png'

import Styles from './Slider.module.css'
const Slider = () => {
    return (

        <div class="crousel-section">
            <div class="swiper-container">

                <div class="swiper-wrapper">
                    <div class="swiper-slide"> <div className={`${Styles.swiper_product_wrapper}`}>
                        <div className={`${Styles.swiper_product_image}`}>
                            <img src={light_blue_man} alt="" />
                        </div>

                        <p className="mb-0">Mens's Fashion</p>
                        <p className={`${Styles.swiper_product_explore_more}`}>+ Explore</p>
                      </div>
                    </div>
                    <div class="swiper-slide">
                        <div className={`${Styles.swiper_product_wrapper}`}>
                            <div className={`${Styles.swiper_product_image}`}>
                                <img src={red_kurta} alt="" />
                            </div>
                            <p className="mb-0">Mens's Fashion</p>
                            <p className={`${Styles.swiper_product_explore_more}`}>+ Explore</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div className={`${Styles.swiper_product_wrapper}`}>
                            <div className={`${Styles.swiper_product_image}`}>
                                <img src={green_tshirt} alt="" />
                            </div>
                            <p className="mb-0">Mens's Fashion</p>
                            <p className={`${Styles.swiper_product_explore_more}`}>+ Explore</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div className={`${Styles.swiper_product_wrapper}`}>
                            <div className={`${Styles.swiper_product_image}`}>
                                <img src={light_blue_man} alt="" />
                            </div>
                            <p className="mb-0">Mens's Fashion</p>
                            <p className={`${Styles.swiper_product_explore_more}`}>+ Explore</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div className={`${Styles.swiper_product_wrapper}`}>
                            <div className={`${Styles.swiper_product_image}`}>
                                <img src={light_blue_man} alt="" />
                            </div>
                            <p className="mb-0">Mens's Fashion</p>
                            <p className={`${Styles.swiper_product_explore_more}`}>+ Explore</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div className={`${Styles.swiper_product_wrapper}`}>
                            <div className={`${Styles.swiper_product_image}`}>
                                <img src={light_blue_man} alt="" />
                            </div>
                            <p className="mb-0">Mens's Fashion</p>
                            <p className={`${Styles.swiper_product_explore_more}`}>+ Explore</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div className={`${Styles.swiper_product_wrapper}`}>
                            <div className={`${Styles.swiper_product_image}`}>
                                <img src={light_blue_man} alt="" />
                            </div>
                            <p className="mb-0">Mens's Fashion</p>
                            <p className={`${Styles.swiper_product_explore_more}`}>+ Explore</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div className={`${Styles.swiper_product_wrapper}`}>
                            <div className={`${Styles.swiper_product_image}`}>
                                <img src={light_blue_man} alt="" />
                            </div>
                            <p className="mb-0">Mens's Fashion</p>
                            <p className={`${Styles.swiper_product_explore_more}`}>+ Explore</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div className={`${Styles.swiper_product_wrapper}`}>
                            <div className={`${Styles.swiper_product_image}`}>
                                <img src={light_blue_man} alt="" />
                            </div>
                            <p className="mb-0">Mens's Fashion</p>
                            <p className={`${Styles.swiper_product_explore_more}`}>+ Explore</p>
                        </div>
                    </div>


                </div>

                <div className={`swiper-button-prev ${Styles.swiper_button_prev}`}></div>
                <div className={`swiper-button-next ${Styles.swiper_button_next}`}></div>
            </div>
        </div>

    )
}

export default Slider
