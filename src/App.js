
import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Index from './Pages/Index';
import Product from './Pages/Product';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';


function App() {
  return (
    
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }>
            <Route index element={ <Index /> }></Route>
            <Route path="product" element={ <Product /> }></Route>
            <Route path="singleProduct" element={ <SingleProduct /> }></Route>
            <Route path="cart" element={ <Cart /> }></Route>
            <Route path="checkout" element={ <Checkout /> }></Route>
          </Route>
          
          
          {/* <Route path="wishlist" element={ <Wishlist /> }></Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

