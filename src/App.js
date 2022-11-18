
import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Index from './Pages/Index';
import Product from './Pages/Product';
import Home from './Pages/Home';


function App() {
  return (
    
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }>
            <Route index element={ <Index /> }></Route>
            <Route path="product" element={ <Product /> }></Route>
          </Route>
          {/* <Route path="cart" element={ <Cart /> }></Route> */}
          {/* <Route path="wishlist" element={ <Wishlist /> }></Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

