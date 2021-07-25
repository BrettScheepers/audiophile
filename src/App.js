import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useGlobalContext } from './context'
import Home from './Components/Route/Home'
import Category from './Components/Route/Category'
import Product from './Components/Route/Product'
import Checkout from './Components/Route/Checkout'
import HeaderNav from './Components/Builder/HeaderNav'
import Footer from './Components/Builder/Footer'
import CartModal from './Components/Builder/CartModal'
import ImageNavModal from './Components/Builder/ImageNavModal'

function App() {
  const history = useHistory()

  const { openCartModal, openImageNavModal } = useGlobalContext()

  return (
    <>
      <HeaderNav />

      { openImageNavModal && <ImageNavModal /> }
      { openCartModal && <CartModal /> }

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Category/:category" exact component={Category} />
        <Route path="/Product/:product" exact component={Product} />
        <Route path="/Checkout" exact component={Checkout} />
      </Switch>
      
      <Footer />
    </>
  );
}

export default App;
