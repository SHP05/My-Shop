import './App.css';
import { useState , useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import Products from './component/Product/Products';
import Product from './component/Product/Product.jsx';
import Cart from './component/Cart/Cart';
import Checkout from './component/CheckOut/Checkout';
import Contact from './component/Contact Us/Contact';
import Signup from './component/Authenticate/Register/Register';
import LoginPg from './component/Authenticate/Login/Login';
import Front from './component/Authenticate/FrontPage/Front';
import NotFound from './component/404Error/NotFound';
import { useLocation } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.scrollTo(0,0);
  }, [pathname]);

  return (
    <>
      <div>
        {
          loading ? (
            <div className="loader-container">
              {/* <div className="spinner"></div> */}
              <div class="custom-loader"></div>
            </div>
          ) : (
            <Routes>
            <Route exact path="/signup" Component={Signup}/>
            <Route exact path="/" Component={Front}/>
            <Route exact path="/login" Component={LoginPg}/>
            <Route exact path="/home" Component={Home}/>
            <Route exact path="/products" Component={Products}/>
            <Route exact path="/products/:id" Component={Product}/>
            <Route exact path="/cart" Component={Cart}/>
            <Route exact path="/cart/:id" Component={Cart}/>
            <Route exact path="/checkout" Component={Checkout}/>
            <Route exact path="/contact" Component={Contact}/>
            <Route exact path="*" Component={NotFound}/>
          </Routes>
          )
        }     
      </div> 
    </>
  );
}

export default App;
