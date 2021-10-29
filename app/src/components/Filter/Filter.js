import React from 'react'
import axios from 'axios'
// import { NavigationContainer } from 'react-navigation'
import Styles from './Filter.module.css'
const Filter = () => {

  

    return (
              
        <div className={`${Styles.more_products_filters}`}>
        <h4 >BRAND</h4>
        <div className={`${Styles.more_products_filters_content}`}>
            <div className={`${Styles.filter_name}`}>
                <input type="checkbox" value="3"  />
                <p>Puma</p>
            </div>
            <p>1223</p>
        </div>
        <div className={`${Styles.more_products_filters_content}`}>
            <div className={`${Styles.filter_name}`}>
                <input type="checkbox" value="5"  />
                <p>nike</p>
            </div>
            <p>1223</p>
        </div>
        <div className={`${Styles.more_products_filters_content}`}>
            <div className={`${Styles.filter_name}`}>
                <input type="checkbox" />
                <p>Puma</p>
            </div>
            <p>1223</p>
        </div>
        <div className={`${Styles.more_products_filters_content}`}>
            <div className={`${Styles.filter_name}`}>
                <input type="checkbox" />
                <p>Puma</p>
            </div>
            <p>1223</p>
        </div>
        <div className={`${Styles.more_products_filters_content}`}>
            <div className={`${Styles.filter_name}`}>
                <input type="checkbox" />
                <p>Puma</p>
            </div>
            <p>1223</p>
        </div>

        <p className={`${Styles.plusmore}`}>+230 More</p>

    </div>
    )
}

export default Filter
