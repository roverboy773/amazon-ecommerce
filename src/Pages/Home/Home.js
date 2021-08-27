import React, { useEffect } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css';


import Cart from '../Cart/Cart'
import Login from '../Login/Login'
import Header from '../../components/Header/Header.js'
import Slider from '../../components/Slider/Slider'
import Footer from '../../components/Footer/Footer'


import Styles from './Home.module.css'


import watch from '../../assets/images/watch.png'
import amazon from '../../assets/images/amazon.png'
import truck from '../../assets/images/truck.png'
import boxes from '../../assets/images/boxes.png'
import credit_card from '../../assets/images/credit_card.png'
import controller from '../../assets/images/controller.png'
import keyboard from '../../assets/images/keyboard.png'
import headphone from '../../assets/images/headphone.png'
import graphic_card from '../../assets/images/graphic_card.png'
import vr from '../../assets/images/vr.png'
import apple from '../../assets/images/apple.png'
import nike from '../../assets/images/nike.png'
import adidas from '../../assets/images/adidas.png'
import puma from '../../assets/images/puma.png'
import ucb from '../../assets/images/ucb.png'
import marjawaan from '../../assets/images/marjawaan.png'
const Home = () => {

    const SwiperHandler = () => {
        Swiper.use([Navigation, Pagination]);
        const swiper = new Swiper('.swiper-container', {
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 20,
            breakpoints: {
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 5
                },
                1028: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    }


    useEffect(() => {
        SwiperHandler()
        return () => {

        }
    }, [])

    return (
        <div>
            {/*           
          {
              localStorage.getItem('user')===null && <Link to="/login">Login</Link>
          }
             <Link to="/cart">Cart</Link> */}

            <Header />

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <div className="container ">
                            <div className={`${Styles.watchhero}`}>
                                <div className="row align-items-center" >
                                    <div className="col-7 m-5">
                                        <h1 className={`${Styles.hero_heading}`}>SHOP NEW MODULAR SMARTWATCHES</h1>
                                        <p className={`${Styles.hero_content}`}>Track Your daily activity on Apple Watch and see your trends.In the Fitness app of your Iphone</p>
                                        <button className={`${Styles.view_more}`}><a href="/">View More</a></button>

                                        <div className={`${Styles.nav_button}`}>
                                            {/* <img src={selected_nav} alt="" className="selected"/>
                             <img src={not_selected} alt="" />
                             <img src={not_selected} alt="" /> */}
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className={`${Styles.outer_circle}`}>
                                                        <div className={`${Styles.inner_circle}`}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className={`${Styles.outer_circle}`}>
                                                        <div className={`${Styles.inner_circle}`}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className={`${Styles.outer_circle}`}>
                                                        <div className={`${Styles.inner_circle}`}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className={`${Styles.outer_circle}`}>
                                                        <div className={`${Styles.inner_circle}`}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-2 m-5">
                                        <img src={watch} alt="" className={`${Styles.watch}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">

                        <div className="container ">
                            <div className={`${Styles.watchhero}`}>
                                <div className="row align-items-center" >
                                    <div className="col-7 m-5">
                                        <h1 className={`${Styles.hero_heading}`}>SHOP NEW MODULAR SMARTWATCHES</h1>
                                        <p className={`${Styles.hero_content}`}>Track Your daily activity on Apple Watch and see your trends.In the Fitness app of your Iphone</p>
                                        <button className={`${Styles.view_more}`}><a href="/">View More</a></button>

                                        <div className={`${Styles.nav_button}`}>
                                            {/* <img src={selected_nav} alt="" className="selected"/>
                             <img src={not_selected} alt="" />
                             <img src={not_selected} alt="" /> */}
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className={`${Styles.outer_circle}`}>
                                                        <div className={`${Styles.inner_circle}`}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className={`${Styles.outer_circle}`}>
                                                        <div className={`${Styles.inner_circle}`}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className={`${Styles.outer_circle}`}>
                                                        <div className={`${Styles.inner_circle}`}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className={`${Styles.outer_circle}`}>
                                                        <div className={`${Styles.inner_circle}`}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-2 m-5">
                                        <img src={watch} alt="" className={`${Styles.watch}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="carousel-item">

                        <div className="container ">
                            <div className={`${Styles.watchhero}`}>
                                <div className="row align-items-center" >
                                    <div className="col-7 m-5">
                                        <h1 className={`${Styles.hero_heading}`}>SHOP NEW MODULAR SMARTWATCHES</h1>
                                        <p className={`${Styles.hero_content}`}>Track Your daily activity on Apple Watch and see your trends.In the Fitness app of your Iphone</p>
                                        <button className={`${Styles.view_more}`}><a href="/">View More</a></button>

                                        <div className={`${Styles.nav_button}`}>
                                            {/* <img src={selected_nav} alt="" className="selected"/>
                             <img src={not_selected} alt="" />
                             <img src={not_selected} alt="" /> */}
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className={`${Styles.outer_circle}`}>
                                                        <div className={`${Styles.inner_circle}`}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className={`${Styles.outer_circle}`}>
                                                        <div className={`${Styles.inner_circle}`}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className={`${Styles.outer_circle}`}>
                                                        <div className={`${Styles.inner_circle}`}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className={`${Styles.outer_circle}`}>
                                                        <div className={`${Styles.inner_circle}`}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-2 m-5">
                                        <img src={watch} alt="" className={`${Styles.watch}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>


            <section className="facilities_banner">
                <div className="container mt-5">
                    <div className={`${Styles.facilities_banner_content_wrapper}`}>
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center w-25">
                                <img src={amazon} alt="" className=" w-50" />
                            </div>
                            <div className="w-25">
                                <div className=" d-flex align-items-center">
                                    <div className="col-4">
                                        <img src={truck} alt="" className="w-75" />
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fw-bolder">Free Shipping</p>
                                        <p className="mb-0">Delivery in 3 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-25">
                                <div className=" d-flex align-items-center">

                                    <img src={boxes} alt="" className="w-25" />

                                    <div className="">
                                        <p className="mb-0 fw-bolder">Exchange & Returns</p>
                                        <p className="mb-0">Money back within 7 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-25">
                                <div className="d-flex align-items-center">

                                    <img src={credit_card} alt="" className="w-25" />

                                    <div className="">
                                        <p className="mb-0 fw-bolder">Secure Payments</p>
                                        <p className="mb-0">Fast and Secure Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="category ">
                <div className="container">

                    <h2 className="fw-bolder my-5">Shop By Category</h2>

                    <Slider />

                </div>
            </section>


            <section className="Mens ">
                <div className="container">

                    <h2 className="fw-bolder my-5">Men's Fashion</h2>

                    <ul className={`${Styles.sub_category}`}>
                        <li>Clothing</li>
                        <li>Accessories</li>
                        <li>Men's Shoes</li>
                        <li>Sports & Fitness</li>
                    </ul>


                    <Slider />







                </div>
            </section>


            <section className="women">
                <div className="container">

                    <h2 className="fw-bolder my-5">women's Fashion</h2>

                    <ul className={`${Styles.sub_category}`}>
                        <li>Clothing</li>
                        <li>Accessories</li>
                        <li>Men's Shoes</li>
                        <li>Sports & Fitness</li>
                    </ul>


                    <Slider />

                </div>
            </section>

            <section className='delivery_banner'>
                <div className="container mt-5">
                    <div className={`${Styles.delivery_banner_wrapper}`}>
                        <div className="row align-items-center" >
                            <div className="col-7 m-5">
                                <h2 className="">Fastest Delivery all across the world</h2>
                                <p className="">We at amazon deliver safe and fast without damaging the product.We trust in quick and quality Serivce</p>
                                <button className={`${Styles.view_more}`}><a href="/">View More</a></button>
                            </div>
                            <div className="col-2 m-5">
                                <img src={boxes} alt="" className={`${Styles.watch}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='recommended'>

                <div className="container mt-5">
                    <h2 className="fw-bolder my-5">Recommended for you</h2>
                    <div className="row">
                        <div className="col-3">
                            <div className={`${Styles.recommended_vr_wrapper}`}>
                                <img src={vr} alt="" />
                                <div className={`${Styles.content}`}>
                                    <h4>Virtual Reality</h4>
                                    <p>Best gaming product - High speed</p>
                                    <p>+Explore</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row mb-3"> <Slider /></div>
                            <div className="row"> <Slider /></div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="Sports&fitness">
                <div className="container">

                    <h2 className="fw-bolder my-5">Sports & Fitness</h2>

                    <Slider />

                </div>
            </section>

            <section className="movies_books_games">
                <div className="container">

                    <h2 className="fw-bolder my-5">Movies, Books & Games</h2>

                    <Slider />

                </div>
            </section>

            <section className="IT_peripherals_banner">
                <div className="container mt-5">
                    <div className={`${Styles.IT_peripherals_banner_content_wrapper}`}>
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={controller} alt="" className=" w-25 " />
                                <div className="">
                                    <p className="mb-0 fw-bolder">Joystick</p>
                                    <p className={`${Styles.explore}`}>+ Explore</p>
                                </div>
                            </div>
                            <div className="w-25">
                                <div className=" d-flex align-items-center justify-content-center">
                                    <div className="col-4">
                                        <img src={graphic_card} alt="" className="w-100" />
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fw-bolder">Joystick</p>
                                        <p className={`${Styles.explore}`}>+ Explore</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-25">
                                <div className=" d-flex align-items-center justify-content-center">

                                    <img src={headphone} alt="" className={`${Styles.headphone}`} />

                                    <div className="">
                                        <p className="mb-0 fw-bolder">Joystick</p>
                                        <p className={`${Styles.explore}`}>+ Explore</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-25">
                                <div className="d-flex align-items-center justify-content-center">

                                    <img src={keyboard} alt="" className="w-25" />

                                    <div className="">
                                        <p className="mb-0 fw-bolder">Joystick</p>
                                        <p className={`${Styles.explore}`}>+ Explore</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="amazon_prime_music_banner">
                <div className="container mt-5">
                    <div className={`${Styles.amazon_prime_music_banner_wrapper}`}>
                        <img src={marjawaan} alt="" className="w-100" />
                    </div>
                </div>
            </section>

            <section className='top_brands'>
                <div className="container mt-5">
                    <div className={`${Styles.top_brands_wrapper}`}>
                        <div className={`${Styles.brand_logo}`}><img src={apple} alt="" /></div>

                        <div className={`${Styles.brand_logo}`}><img src={adidas} alt="" /></div>

                        <div className={`${Styles.brand_logo}`}> <img src={nike} alt="" /></div>

                        <div className={`${Styles.brand_logo}`}><img src={ucb} alt="" /></div>

                        <div className={`${Styles.brand_logo}`}> <img src={puma} alt="" /></div>

                    </div>
                </div>
            </section>


            <Footer />

        </div>
    )
}

export default Home
