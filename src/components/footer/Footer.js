import React from 'react'

import Styles from './Footer.module.css'

import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import youtube from '../../assets/images/youtube.png'
import download_playstore from '../../assets/images/download_playstore.png'
import download_appstore from '../../assets/images/download_appstore.png'
import footer_line from '../../assets/images/footer_line.png'
const Footer = () => {
    return (
        <div className="container my-5">
            <div className={`${Styles.footer_wrapper}`}>
                <div className="footer_content">
                    <div className="row">
                        <div className="col-3 pt-5">
                            <div className={`${Styles.footer_online_shopping_links_wrapper}`}>
                                <h3 >ONLINE SHOPPING</h3>
                                <ul>
                                    <li><a href="/">Men</a></li>
                                    <li><a href="/">Women</a></li>
                                    <li><a href="/">Kids</a></li>
                                    <li><a href="/">Home & Living</a></li>
                                    <li><a href="/">Electronics</a></li>
                                    <li><a href="/">Sports & Fitness</a></li>
                                    <li><a href="/">Movies, Books & Games</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-3 pt-5">
                            <div className={`${Styles.footer_useful_links_wrapper}`}>
                                <h3>USEFULL LINKS</h3>
                                <ul>
                                    <li><a href="/">Contact Us</a></li>
                                    <li><a href="/">FAQ</a></li>
                                    <li><a href="/">T&C</a></li>
                                    <li><a href="/">Terms of Use</a></li>
                                    <li><a href="/">Shipping</a></li>
                                    <li><a href="/">Cancellation</a></li>
                                    <li><a href="/">Returns</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-3 pt-5">
                            <div className={`${Styles.footer_make_money_with_us_wrapper}`}>
                                <h3>MAKE MONEY WITH US</h3>
                                <ul>
                                    <li><a href="/">Sell on Amazon</a></li>
                                    <li><a href="/">Sell Under Amazon Accelerator</a></li>
                                    <li><a href="/">Tanrta Global Selling</a></li>
                                    <li><a href="/">Become an Affiliate</a></li>
                                    <li><a href="/">Fulfilment by Tantra</a></li>
                                    <li><a href="/">Advertise Your Products</a></li>
                                    <li><a href="/">Tantra Pay on Merchants</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-3 pt-5">
                            <div className={`${Styles.footer_connect_with_us}`}>
                                <h3>CONNECT WITH US</h3>
                                <ul>
                                    <li>
                                        <div className={`${Styles.contact} ${Styles.footer_twitter_wrapper}`}>
                                            <img src={twitter} alt="Twitter Logo" />
                                            <a href="/" className="mb-0">Twitter</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={`${Styles.contact} ${Styles.footer_instagram_wrapper}`}>
                                            <img src={instagram} alt="Instagram Logo" />
                                            <a href="/" className="mb-0">Instagram</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={`${Styles.contact} ${Styles.footer_youtube_wrapper}`}>
                                            <img src={youtube} alt="Youtube Logo" />
                                            <a href="/" className="mb-0">Youtube</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={`${Styles.contact} ${Styles.footer_facebook_wrapper}`}>
                                            <img src={facebook} alt="FaceBook Logo" />
                                            <a href="/" className="mb-0">Facebook</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className={`${Styles.footer_experience_our_app}`}>
                                <h3>EXPERIENCE OUR APP</h3>
                                <div className={`${Styles.footer_experience_our_app_wrapper}`}>

                                    <div className={`${Styles.play_store}`}> <img src={download_playstore} alt="Google Play Store image" /></div>

                                    <div className={`${Styles.app_store}`}>  <img src={download_appstore} alt="iOS App Store image" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={footer_line} alt="Line" className={`${Styles.footer_line}`}/>


                <p className={`${Styles.copy_right}`}> &#169; Copyright 2021 Amazon shopping inc. All Rights Reserved</p>

            </div>
        </div>
    )
}

export default Footer
