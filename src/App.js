
import { BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Products from './components/products/Products'
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
      
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
