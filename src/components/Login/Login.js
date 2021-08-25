import React,{useState} from 'react'
import { BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import Cart from '../Cart/Cart'
import Home from '../Home/Home'

const Login = () => {
   
    const [loginstatus, setLoginstatus] = useState(localStorage.getItem('user'))
    const loginHandler= () =>{
        const user={
            name:'pranjal',
            address:"delhi"
        }
    
         localStorage.setItem('user',JSON.stringify(user))
         console.log(localStorage)
         if(localStorage.getItem('user'))
         setLoginstatus('logged in')
    }
  
    if(localStorage.getItem('user')!==null)
    window.location='/cart'

    return (
        <div>
          {
            loginstatus===null && <button onClick={(e)=>{loginHandler()}}>Login</button>
          }
             <h2>{loginstatus}</h2>
        </div>
    )
}

export default Login
