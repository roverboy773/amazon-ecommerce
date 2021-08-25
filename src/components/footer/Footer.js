import React from 'react'

import '../../root/css/footer.css'

import twitter from '../../root/images/twitter.png'
import instagram from '../../root/images/instagram.png'
import facebook from '../../root/images/facebook.png'
import youtube from '../../root/images/youtube.png'
import download_playstore from '../../root/images/download_playstore.png'
import download_appstore from '../../root/images/download_appstore.png'
import footer_line from '../../root/images/footer_line.png'
const Footer = () => {
    return (
        <div className="container my-5">
            <div className="footer_wrapper">
                <div className="footer_content">
                    <div className="row">
                        <div className="col-3 pt-5">
                            <div className="online_shopping">
                                <h3>ONLINE SHOPPING</h3>
                                <ul>
                                    <li><a href="">Men</a></li>
                                    <li><a href="">Women</a></li>
                                    <li><a href="">Kids</a></li>
                                    <li><a href="">Home & Living</a></li>
                                    <li><a href="">Electronics</a></li>
                                    <li><a href="">Sports & Fitness</a></li>
                                    <li><a href="">Movies, Books & Games</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-3 pt-5">
                            <div className="useful_links">
                                <h3>USEFULL LINKS</h3>
                                <ul>
                                    <li><a href="">Contact Us</a></li>
                                    <li><a href="">FAQ</a></li>
                                    <li><a href="">T&C</a></li>
                                    <li><a href="">Terms of Use</a></li>
                                    <li><a href="">Shipping</a></li>
                                    <li><a href="">Cancellation</a></li>
                                    <li><a href="">Returns</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-3 pt-5">
                            <div className="make_money_with_us">
                                <h3>MAKE MONEY WITH US</h3>
                                <ul>
                                    <li><a href="">Sell on Amazon</a></li>
                                    <li><a href="">Sell Under Amazon Accelerator</a></li>
                                    <li><a href="">Tanrta Global Selling</a></li>
                                    <li><a href="">Become an Affiliate</a></li>
                                    <li><a href="">Fulfilment by Tantra</a></li>
                                    <li><a href="">Advertise Your Products</a></li>
                                    <li><a href="">Tantra Pay on Merchants</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-3 pt-5">
                            <div className="connect_with_us">
                                <h3>CONNECT WITH US</h3>
                                <ul>
                                    <li>
                                        <div className="contact twitter_wrapper">
                                            <img src={twitter} alt="" />
                                            <a href="" className="mb-0">Twitter</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact instagram_wrapper">
                                            <img src={instagram} alt="" />
                                            <a href="" className="mb-0">Instagram</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact youtube_wrapper">
                                            <img src={youtube} alt="" />
                                            <a href="" className="mb-0">Youtube</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact facebook_wrapper">
                                            <img src={facebook} alt="" />
                                            <a href="" className="mb-0">Facebook</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="experience_our_app">
                                <h3>EXPERIENCE OUR APP</h3>
                                <div className="experience_our_app_wrapper">

                                    <div className="play_store"> <img src={download_playstore} alt="" /></div>

                                    <div className="app_store">  <img src={download_appstore} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={footer_line} alt="" className="footer_line" />

                <div>
                      <p className="copy_right"> &#169; Copyright 2021 Amazon shopping inc. All Rights Reserved</p> 
                </div>
            </div>
        </div>
    )
}

export default Footer
