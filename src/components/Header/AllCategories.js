import React from 'react'
import Styles from './AllCategories.module.css'

const AllCategories = () => {
    return (
        <div className="container my-5">
        <div className={`${Styles.lower_header}`}>
            <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">MEN</a>
                </li>
                <li>
                    <a href="/">WOMEN</a>
                </li>
                <li>
                    <a href="/">KIDS</a>
                </li>
                <li>
                    <a href="/">HOME & LIVING</a>
                </li>
                <li>
                    <a href="/">ELECTRONICS</a>
                </li>
                <li>
                    <a href="/">BEAUTY PRODUCTS</a>
                </li>
                <li>
                    <a href="/">SPORTS & FITNESS</a>
                </li>
                <li>
                    <a href="/">BOOKS</a>
                </li>
                <li>
                    <a href="/">MOVIES, MUSIC & GAMES</a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default AllCategories
