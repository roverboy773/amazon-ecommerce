import React,{useState} from 'react'
import { BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'

import Home from '../Home/Home'
import Login from '../Login/Login'

const Cart = () => {
 
    const [redirectToLogin, setRedirectToLogin] = useState(false)

   if(localStorage.getItem('user')===null && redirectToLogin===false){
    console.log(localStorage)
     setRedirectToLogin(true)
  
   }

    return (
        <div>
        {
            redirectToLogin ?  <Link to="/login">Login</Link>  :
            <div>
                  <Link to="/">Home</Link>
                  <h2>Cart summary</h2>
            </div>
        }
            

        </div>
    )
}

export default Cart
