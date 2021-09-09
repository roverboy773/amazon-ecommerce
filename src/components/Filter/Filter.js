import React from 'react'
import axios from 'axios'
// import { NavigationContainer } from 'react-navigation'
import Styles from './Filter.module.css'
const Filter = () => {

    const handleFilter=async (e)=>{
        if(e.target.checked==true){
            // console.log('checked')
            const axios_data=await axios.get('https://randomuser.me/api/')
            // console.log(axios_data)
            const json_data=axios_data.data.results; 
            // console.log(json_data)
    
            let arr=[];
            json_data.map((ele)=>{
                let obj={};
                obj.id=ele.id.value;
                obj.name=ele.name.first;
                obj.picture=ele.picture.large;
                arr.push(obj);
             })
            //  console.log(arr);

             navigation.navigate('product_details', {
               tranferred_data:arr,
              });
        }
        
    }

    return (
              
        <div className={`${Styles.more_products_filters}`}>
        <h4 >BRAND</h4>
        <div className={`${Styles.more_products_filters_content}`}>
            <div className={`${Styles.filter_name}`}>
                <input type="checkbox" value="3"  onClick={(e)=>{handleFilter(e)}}/>
                <p>Puma</p>
            </div>
            <p>1223</p>
        </div>
        <div className={`${Styles.more_products_filters_content}`}>
            <div className={`${Styles.filter_name}`}>
                <input type="checkbox" value="5" onClick={(e)=>{handleFilter(e)}} />
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
