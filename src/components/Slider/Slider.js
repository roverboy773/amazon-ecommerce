import React from 'react'

import young_man from '../../root/images/young_man.png'
import young_women from '../../root/images/young_women.png'
import beauty_product from '../../root/images/beauty_product.png'
import light_blue_man from '../../root/images/light_blue_man.png'
import green_tshirt from '../../root/images/greentshirt.png'
import red_kurta from '../../root/images/red_kurta.png'

import '../../root/css/Slider.css'
const Slider = () => {
    return (
        
            <div class="crousel-section">
                        <div class="swiper-container">

                            <div class="swiper-wrapper">
                                <div class="swiper-slide"> <div className="all_category_wrapper">
                                    <div className="img_wrapper"><img src={light_blue_man} alt="" /></div>

                                    <p className="mb-0">Mens's Fashion</p>
                                    <p className="explore">+ Explore</p>
                                </div></div>
                                <div class="swiper-slide">
                                    <div className="all_category_wrapper">
                                        <div className="img_wrapper">
                                            <img src={red_kurta} alt="" />
                                        </div>
                                        <p className="mb-0">Mens's Fashion</p>
                                        <p className="explore">+ Explore</p>
                                    </div></div>
                                <div class="swiper-slide">
                                    <div className="all_category_wrapper">
                                        <div className="img_wrapper">
                                            <img src={green_tshirt} alt="" />
                                        </div>
                                        <p className="mb-0">Mens's Fashion</p>
                                        <p className="explore">+ Explore</p>
                                    </div></div>
                                <div class="swiper-slide">
                                    <div className="all_category_wrapper">
                                        <div className="img_wrapper">
                                            <img src={light_blue_man} alt="" />
                                        </div>
                                        <p className="mb-0">Mens's Fashion</p>
                                        <p className="explore">+ Explore</p>
                                    </div></div>
                                <div class="swiper-slide">
                                    <div className="all_category_wrapper">
                                        <div className="img_wrapper">
                                            <img src={light_blue_man} alt="" />
                                        </div>
                                        <p className="mb-0">Mens's Fashion</p>
                                        <p className="explore">+ Explore</p>
                                    </div></div>
                                <div class="swiper-slide">
                                    <div className="all_category_wrapper">
                                        <div className="img_wrapper">
                                            <img src={light_blue_man} alt="" />
                                        </div>
                                        <p className="mb-0">Mens's Fashion</p>
                                        <p className="explore">+ Explore</p>
                                    </div></div>
                                <div class="swiper-slide">
                                    <div className="all_category_wrapper">
                                        <div className="img_wrapper">
                                            <img src={light_blue_man} alt="" />
                                        </div>
                                        <p className="mb-0">Mens's Fashion</p>
                                        <p className="explore">+ Explore</p>
                                    </div></div>
                                <div class="swiper-slide">
                                    <div className="all_category_wrapper">
                                        <div className="img_wrapper">
                                            <img src={light_blue_man} alt="" />
                                        </div>
                                        <p className="mb-0">Mens's Fashion</p>
                                        <p className="explore">+ Explore</p>
                                    </div></div>
                                <div class="swiper-slide">
                                    <div className="all_category_wrapper">
                                        <div className="img_wrapper">
                                            <img src={light_blue_man} alt="" />
                                        </div>
                                        <p className="mb-0">Mens's Fashion</p>
                                        <p className="explore">+ Explore</p>
                                    </div></div>


                            </div>

                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
       
    )
}

export default Slider
