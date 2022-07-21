import Header from "./components/Layout/Header";
import PageSummary from "./components/UI/PageSummary";
import Store from "./Store/Store";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/Pages/ProductDetail";
import React, { useState } from "react";
import { Route,Switch } from "react-router-dom";
import CartProvider from "./components/Cart/CartProvider";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

function App() {

  const [cartIsShown , setCartIsShown] = useState(false);
  const [product , setProduct] = useState({});
  const showCartHandler = props =>
  {
    setCartIsShown(true);
  };
  const hideCartHandler = props =>
  {
    setCartIsShown(false);
  };
  const productsArr = 
  [
      {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      },
      {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      },
      {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      },
      {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      }
    ]

  function productDetail(proObj)
  {
    setProduct(proObj);
    console.log('Button Clicked');
  }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <PageSummary />
      <Switch>
        <Route path="/Home">
        <Home></Home>
        </Route>
        <Route path="/About">
          <About></About>
        </Route>
        <Route path="/Store" exact>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Store prodList={productsArr} productDetail={productDetail}/>
        </Route>
        <Route path='/Store/:product'>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
          <ProductDetail product={product}/>
        </Route>
      </Switch>
      <Footer />  
    </CartProvider>
  );
}

export default App;
