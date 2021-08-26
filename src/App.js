
import { BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'


import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Products from './Pages/Products/Products'
import IndiProduct from './Pages/Product/IndiProduct'

import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
        
          <Route exact path="/cart">
              <Cart />
          </Route>

          <Route exact path="/login">
             <Login />
          </Route>

          <Route ecact path="/products">
            <Products />
          </Route>

          <Route ecact path="/product">
            <IndiProduct />
          </Route>
      
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
