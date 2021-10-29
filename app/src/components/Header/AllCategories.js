import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import Styles from './AllCategories.module.css'

const AllCategories = () => {

    const [category, setCategory] = useState('')

    const handlesetCategory=(e)=>{
      let val=e.target.innerHTML.split(" ");
      let str="";
      for(let i=0;i<val.length;i++){
       if(i!==val.length-1)
       str+=val[i]+'-';
       else str+=val[i];
      }
    //   console.log(val);
    //   console.log(str);
      setCategory(str.toLowerCase());
      
    }
    return (
        <div className="container">
       
            <div className={`${Styles.lower_header}`}>
                <ul>
                    <li>
                    <a href="#" onClick={(e) => handlesetCategory(e)}>ALL</a>
                        <div className={`${Styles.sub_categories}`}>
                            <div>
                                <h5>Topwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Formal Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Blazers & Coats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Suits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rain Jackets</a></li>
                                </ul>
                                <h5> Indian & Festive Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Kurtas & Kurta Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sherwanis</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Nehru Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Dhotis</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Bottomwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jeans</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Joggers</a></li>
                                </ul>
                                <h5>Innerwear & Sleepwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}> Briefs & Trunks</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Boxers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Vests</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sleepwear & Loungewear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Thermals</a></li>
                                </ul>
                                <h5> Plus Size</h5>

                            </div>
                            <div>
                                <h5>Footwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sneakers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Sandals & Floaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Socks</a></li>
                                </ul>
                                <h5>Personal Care & Groomingar</h5>
                                <h5> Sunglasses & Frames</h5>
                                <h5>Watches</h5>

                            </div>
                            <div>
                                <h5>Sports & Active Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Sandals</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Active T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets & Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Tracksuits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Accessorie</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Swimwear</a></li>
                                </ul>
                                <h5>Gadgets</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Smart Wearables</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Fitness Gadgets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Headphones</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Speakers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Fashion Accessories</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Wallets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Belts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Perfumes & Body Mists</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Trimmers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Deodorants</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Ties, Cufflinks & Pocket Squares</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Accessory Gift Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Caps & Hats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Mufflers, Scarves & Gloves</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Phone Cases</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rings & Wristwear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Helmets</a></li>
                                </ul>
                                <h5>Bags & Backpacks</h5>
                                <h5>Luggages & Trolleys</h5>
                            </div>
                        </div>
                    </li>

                    <li>
                    <a href="#" onClick={(e) => handlesetCategory(e)}>MEN</a>
                        <div className={`${Styles.sub_categories}`}>
                            <div>
                                <h5>Topwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Formal Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Blazers & Coats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Suits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rain Jackets</a></li>
                                </ul>
                                <h5> Indian & Festive Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Kurtas & Kurta Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sherwanis</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Nehru Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Dhotis</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Bottomwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jeans</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Joggers</a></li>
                                </ul>
                                <h5>Innerwear & Sleepwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}> Briefs & Trunks</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Boxers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Vests</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sleepwear & Loungewear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Thermals</a></li>
                                </ul>
                                <h5> Plus Size</h5>

                            </div>
                            <div>
                                <h5>Footwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sneakers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Sandals & Floaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Socks</a></li>
                                </ul>
                                <h5>Personal Care & Groomingar</h5>
                                <h5> Sunglasses & Frames</h5>
                                <h5>Watches</h5>

                            </div>
                            <div>
                                <h5>Sports & Active Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Sandals</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Active T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets & Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Tracksuits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Accessorie</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Swimwear</a></li>
                                </ul>
                                <h5>Gadgets</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Smart Wearables</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Fitness Gadgets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Headphones</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Speakers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Fashion Accessories</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Wallets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Belts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Perfumes & Body Mists</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Trimmers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Deodorants</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Ties, Cufflinks & Pocket Squares</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Accessory Gift Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Caps & Hats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Mufflers, Scarves & Gloves</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Phone Cases</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rings & Wristwear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Helmets</a></li>
                                </ul>
                                <h5>Bags & Backpacks</h5>
                                <h5>Luggages & Trolleys</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                    <a href="#" onClick={(e) => handlesetCategory(e)}>WOMEN</a>

                        <div className={`${Styles.sub_categories}`}>
                            <div>
                                <h5>Topwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Formal Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Blazers & Coats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Suits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rain Jackets</a></li>
                                </ul>
                                <h5> Indian & Festive Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Kurtas & Kurta Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sherwanis</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Nehru Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Dhotis</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Bottomwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jeans</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Joggers</a></li>
                                </ul>
                                <h5>Innerwear & Sleepwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}> Briefs & Trunks</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Boxers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Vests</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sleepwear & Loungewear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Thermals</a></li>
                                </ul>
                                <h5> Plus Size</h5>

                            </div>
                            <div>
                                <h5>Footwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sneakers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Sandals & Floaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Socks</a></li>
                                </ul>
                                <h5>Personal Care & Groomingar</h5>
                                <h5> Sunglasses & Frames</h5>
                                <h5>Watches</h5>

                            </div>
                            <div>
                                <h5>Sports & Active Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Sandals</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Active T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets & Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Tracksuits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Accessorie</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Swimwear</a></li>
                                </ul>
                                <h5>Gadgets</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Smart Wearables</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Fitness Gadgets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Headphones</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Speakers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Fashion Accessories</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Wallets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Belts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Perfumes & Body Mists</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Trimmers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Deodorants</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Ties, Cufflinks & Pocket Squares</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Accessory Gift Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Caps & Hats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Mufflers, Scarves & Gloves</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Phone Cases</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rings & Wristwear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Helmets</a></li>
                                </ul>
                                <h5>Bags & Backpacks</h5>
                                <h5>Luggages & Trolleys</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                    <a href="#" onClick={(e) => handlesetCategory(e)}>KIDS</a>
                        <div className={`${Styles.sub_categories}`}>
                            <div>
                                <h5>Topwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Formal Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Blazers & Coats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Suits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rain Jackets</a></li>
                                </ul>
                                <h5> Indian & Festive Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Kurtas & Kurta Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sherwanis</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Nehru Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Dhotis</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Bottomwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jeans</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Joggers</a></li>
                                </ul>
                                <h5>Innerwear & Sleepwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}> Briefs & Trunks</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Boxers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Vests</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sleepwear & Loungewear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Thermals</a></li>
                                </ul>
                                <h5> Plus Size</h5>

                            </div>
                            <div>
                                <h5>Footwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sneakers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Sandals & Floaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Socks</a></li>
                                </ul>
                                <h5>Personal Care & Groomingar</h5>
                                <h5> Sunglasses & Frames</h5>
                                <h5>Watches</h5>

                            </div>
                            <div>
                                <h5>Sports & Active Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Sandals</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Active T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets & Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Tracksuits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Accessorie</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Swimwear</a></li>
                                </ul>
                                <h5>Gadgets</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Smart Wearables</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Fitness Gadgets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Headphones</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Speakers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Fashion Accessories</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Wallets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Belts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Perfumes & Body Mists</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Trimmers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Deodorants</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Ties, Cufflinks & Pocket Squares</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Accessory Gift Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Caps & Hats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Mufflers, Scarves & Gloves</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Phone Cases</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rings & Wristwear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Helmets</a></li>
                                </ul>
                                <h5>Bags & Backpacks</h5>
                                <h5>Luggages & Trolleys</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                    <a href="#" onClick={(e) => handlesetCategory(e)}>HOME & LIVING</a>
                        <div className={`${Styles.sub_categories}`}>
                            <div>
                                <h5>Topwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Formal Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Blazers & Coats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Suits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rain Jackets</a></li>
                                </ul>
                                <h5> Indian & Festive Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Kurtas & Kurta Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sherwanis</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Nehru Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Dhotis</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Bottomwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jeans</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Joggers</a></li>
                                </ul>
                                <h5>Innerwear & Sleepwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}> Briefs & Trunks</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Boxers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Vests</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sleepwear & Loungewear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Thermals</a></li>
                                </ul>
                                <h5> Plus Size</h5>

                            </div>
                            <div>
                                <h5>Footwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sneakers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Sandals & Floaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Socks</a></li>
                                </ul>
                                <h5>Personal Care & Groomingar</h5>
                                <h5> Sunglasses & Frames</h5>
                                <h5>Watches</h5>

                            </div>
                            <div>
                                <h5>Sports & Active Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Sandals</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Active T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets & Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Tracksuits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Accessorie</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Swimwear</a></li>
                                </ul>
                                <h5>Gadgets</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Smart Wearables</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Fitness Gadgets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Headphones</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Speakers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Fashion Accessories</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Wallets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Belts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Perfumes & Body Mists</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Trimmers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Deodorants</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Ties, Cufflinks & Pocket Squares</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Accessory Gift Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Caps & Hats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Mufflers, Scarves & Gloves</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Phone Cases</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rings & Wristwear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Helmets</a></li>
                                </ul>
                                <h5>Bags & Backpacks</h5>
                                <h5>Luggages & Trolleys</h5>
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <a href="#" onClick={(e) => handlesetCategory(e)}>ELECTRONICS</a>
                        <div className={`${Styles.sub_categories}`}>
                            <div>
                                <h5>Topwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Formal Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Blazers & Coats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Suits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rain Jackets</a></li>
                                </ul>
                                <h5> Indian & Festive Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Kurtas & Kurta Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sherwanis</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Nehru Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Dhotis</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Bottomwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jeans</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Joggers</a></li>
                                </ul>
                                <h5>Innerwear & Sleepwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}> Briefs & Trunks</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Boxers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Vests</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sleepwear & Loungewear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Thermals</a></li>
                                </ul>
                                <h5> Plus Size</h5>

                            </div>
                            <div>
                                <h5>Footwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sneakers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Sandals & Floaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Socks</a></li>
                                </ul>
                                <h5>Personal Care & Groomingar</h5>
                                <h5> Sunglasses & Frames</h5>
                                <h5>Watches</h5>

                            </div>
                            <div>
                                <h5>Sports & Active Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Sandals</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Active T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets & Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Tracksuits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Accessorie</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Swimwear</a></li>
                                </ul>
                                <h5>Gadgets</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Smart Wearables</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Fitness Gadgets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Headphones</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Speakers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Fashion Accessories</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Wallets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Belts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Perfumes & Body Mists</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Trimmers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Deodorants</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Ties, Cufflinks & Pocket Squares</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Accessory Gift Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Caps & Hats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Mufflers, Scarves & Gloves</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Phone Cases</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rings & Wristwear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Helmets</a></li>
                                </ul>
                                <h5>Bags & Backpacks</h5>
                                <h5>Luggages & Trolleys</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                    <a href="#" onClick={(e) => handlesetCategory(e)}>BEAUTY PRODUCTS</a>
                        <div className={`${Styles.sub_categories}`}>
                            <div>
                                <h5>Topwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Formal Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Blazers & Coats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Suits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rain Jackets</a></li>
                                </ul>
                                <h5> Indian & Festive Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Kurtas & Kurta Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sherwanis</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Nehru Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Dhotis</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Bottomwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jeans</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Joggers</a></li>
                                </ul>
                                <h5>Innerwear & Sleepwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}> Briefs & Trunks</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Boxers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Vests</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sleepwear & Loungewear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Thermals</a></li>
                                </ul>
                                <h5> Plus Size</h5>

                            </div>
                            <div>
                                <h5>Footwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sneakers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Sandals & Floaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Socks</a></li>
                                </ul>
                                <h5>Personal Care & Groomingar</h5>
                                <h5> Sunglasses & Frames</h5>
                                <h5>Watches</h5>

                            </div>
                            <div>
                                <h5>Sports & Active Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Sandals</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Active T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets & Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Tracksuits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Accessorie</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Swimwear</a></li>
                                </ul>
                                <h5>Gadgets</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Smart Wearables</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Fitness Gadgets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Headphones</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Speakers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Fashion Accessories</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Wallets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Belts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Perfumes & Body Mists</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Trimmers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Deodorants</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Ties, Cufflinks & Pocket Squares</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Accessory Gift Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Caps & Hats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Mufflers, Scarves & Gloves</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Phone Cases</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rings & Wristwear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Helmets</a></li>
                                </ul>
                                <h5>Bags & Backpacks</h5>
                                <h5>Luggages & Trolleys</h5>
                            </div>
                        </div>

                    </li>
                    <li>
                    <a href="#" onClick={(e) => handlesetCategory(e)}>SPROTS AND FITNESS</a>
                        <div className={`${Styles.sub_categories}`}>
                            <div>
                                <h5>Topwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Formal Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Blazers & Coats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Suits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rain Jackets</a></li>
                                </ul>
                                <h5> Indian & Festive Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Kurtas & Kurta Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sherwanis</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Nehru Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Dhotis</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Bottomwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jeans</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Joggers</a></li>
                                </ul>
                                <h5>Innerwear & Sleepwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}> Briefs & Trunks</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Boxers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Vests</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sleepwear & Loungewear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Thermals</a></li>
                                </ul>
                                <h5> Plus Size</h5>

                            </div>
                            <div>
                                <h5>Footwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sneakers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Sandals & Floaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Socks</a></li>
                                </ul>
                                <h5>Personal Care & Groomingar</h5>
                                <h5> Sunglasses & Frames</h5>
                                <h5>Watches</h5>

                            </div>
                            <div>
                                <h5>Sports & Active Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Sandals</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Active T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets & Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Tracksuits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Accessorie</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Swimwear</a></li>
                                </ul>
                                <h5>Gadgets</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Smart Wearables</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Fitness Gadgets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Headphones</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Speakers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Fashion Accessories</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Wallets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Belts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Perfumes & Body Mists</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Trimmers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Deodorants</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Ties, Cufflinks & Pocket Squares</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Accessory Gift Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Caps & Hats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Mufflers, Scarves & Gloves</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Phone Cases</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rings & Wristwear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Helmets</a></li>
                                </ul>
                                <h5>Bags & Backpacks</h5>
                                <h5>Luggages & Trolleys</h5>
                            </div>
                        </div>
                    </li>

                    <li>
                    <a href="#" onClick={(e) => handlesetCategory(e)}>BOOKS</a>
                        <div className={`${Styles.sub_categories}`}>
                            <div>
                                <h5>Topwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Formal Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Blazers & Coats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Suits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rain Jackets</a></li>
                                </ul>
                                <h5> Indian & Festive Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Kurtas & Kurta Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sherwanis</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Nehru Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Dhotis</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Bottomwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jeans</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Joggers</a></li>
                                </ul>
                                <h5>Innerwear & Sleepwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}> Briefs & Trunks</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Boxers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Vests</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sleepwear & Loungewear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Thermals</a></li>
                                </ul>
                                <h5> Plus Size</h5>

                            </div>
                            <div>
                                <h5>Footwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sneakers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Sandals & Floaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Socks</a></li>
                                </ul>
                                <h5>Personal Care & Groomingar</h5>
                                <h5> Sunglasses & Frames</h5>
                                <h5>Watches</h5>

                            </div>
                            <div>
                                <h5>Sports & Active Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Sandals</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Active T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets & Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Tracksuits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Accessorie</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Swimwear</a></li>
                                </ul>
                                <h5>Gadgets</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Smart Wearables</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Fitness Gadgets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Headphones</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Speakers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Fashion Accessories</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Wallets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Belts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Perfumes & Body Mists</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Trimmers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Deodorants</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Ties, Cufflinks & Pocket Squares</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Accessory Gift Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Caps & Hats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Mufflers, Scarves & Gloves</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Phone Cases</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rings & Wristwear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Helmets</a></li>
                                </ul>
                                <h5>Bags & Backpacks</h5>
                                <h5>Luggages & Trolleys</h5>
                            </div>
                        </div>
                    </li>


                    <li>
                    <a href="#" onClick={(e) => handlesetCategory(e)}>MOVIES, MUSIC & GAMES</a>
                        <div className={`${Styles.sub_categories}`}>
                            <div>
                                <h5>Topwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Formal Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sweaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Blazers & Coats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Suits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rain Jackets</a></li>
                                </ul>
                                <h5> Indian & Festive Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Kurtas & Kurta Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sherwanis</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Nehru Jackets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Dhotis</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Bottomwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jeans</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Trousers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Joggers</a></li>
                                </ul>
                                <h5>Innerwear & Sleepwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}> Briefs & Trunks</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Boxers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Vests</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sleepwear & Loungewear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Thermals</a></li>
                                </ul>
                                <h5> Plus Size</h5>

                            </div>
                            <div>
                                <h5>Footwear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Casual Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Formal Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sneakers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)} >Sandals & Floaters</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Socks</a></li>
                                </ul>
                                <h5>Personal Care & Groomingar</h5>
                                <h5> Sunglasses & Frames</h5>
                                <h5>Watches</h5>

                            </div>
                            <div>
                                <h5>Sports & Active Wear</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Shoes</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Sandals</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Active T-Shirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Track Pants & Shorts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Jackets & Sweatshirts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Tracksuits</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Sports Accessorie</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Swimwear</a></li>
                                </ul>
                                <h5>Gadgets</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Smart Wearables</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Fitness Gadgets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Headphones</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Speakers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Fashion Accessories</h5>
                                <ul>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Wallets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Belts</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Perfumes & Body Mists</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Trimmers</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Deodorants</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Ties, Cufflinks & Pocket Squares</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Accessory Gift Sets</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Caps & Hats</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Mufflers, Scarves & Gloves</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Phone Cases</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Rings & Wristwear</a></li>
                                    <li><a href="#" onClick={(e) => handlesetCategory(e)}>Helmets</a></li>
                                </ul>
                                <h5>Bags & Backpacks</h5>
                                <h5>Luggages & Trolleys</h5>
                            </div>
                        </div>
                    </li>
                </ul>


            </div>

       { category!=='' && <Redirect to={`/category/${category}`}></Redirect>}
       
        </div>
    )
}

export default AllCategories
