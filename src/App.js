import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Route/Home'
import HeaderNav from './Components/Builder/HeaderNav'
import Footer from './Components/Builder/Footer'
import Brag from './Components/Builder/Brag'
import ImageNav from './Components/Builder/ImageNav'

function App() {
  return (
    <>
      <HeaderNav />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      {/* <ImageNav />
      <Brag /> */}
      <Footer />
    </>
  );
}

export default App;
