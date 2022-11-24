
import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Index from './Pages/Index';
import Product from './Pages/Product';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import CartEmpty from './Pages/CartEmpty';
import Checkout from './Pages/Checkout';
import ProductCustomize from './Pages/ProductCustomize';
import ProductCustomize2 from './Pages/ProductCustomize2';
import ProductCustomize3 from './Pages/ProductCustomize3';
import ProductCustomize4 from './Pages/ProductCustomize4';

import MyAccount from './Pages/MyAccount';
import MyAccountOrder from './Pages/MyAccountOrder';
import MyAccountPayment from './Pages/MyAccountPayment';
import MyAccountWallet from './Pages/MyAccountWallet';
import MyAccountAddress from './Pages/MyAccountAddress';
import MyProfile from './Pages/MyProfile';

import LandingPage from './Pages/LandingPage';
import Order from './Pages/Order';



function App() {
  return (
    
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }>
            <Route index element={ <Index /> }></Route>
            <Route path="product" element={ <Product /> }></Route>  
            <Route path="singleProduct" element={ <SingleProduct /> }></Route>
          </Route>
          
          <Route path="cart" element={ <Cart /> }></Route>
          <Route path="cartEmpty" element={ <CartEmpty /> }></Route>
          <Route path="checkout" element={ <Checkout /> }></Route>
          <Route path="productCustomize" element={ <ProductCustomize /> }></Route>
          <Route path="productCustomize2" element={ <ProductCustomize2 /> }></Route>
          <Route path="productCustomize3" element={ <ProductCustomize3 /> }></Route>
          <Route path="productCustomize4" element={ <ProductCustomize4 /> }></Route>

          <Route path="myAccount" element={ <MyAccount /> }></Route>
          <Route path="myAccountOrder" element={ <MyAccountOrder /> }></Route>
          <Route path="myAccountPayment" element={ <MyAccountPayment /> }></Route>
          <Route path="myAccountWallet" element={ <MyAccountWallet /> }></Route>
          <Route path="myAccountAddress" element={ <MyAccountAddress /> }></Route>
          <Route path="myProfile" element={ <MyProfile /> }></Route>

          <Route path="landingPage" element={ <LandingPage /> }></Route>
          <Route path="order" element={ <Order /> }></Route>
          
          {/* <Route path="wishlist" element={ <Wishlist /> }></Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

