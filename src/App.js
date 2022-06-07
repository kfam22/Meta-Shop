import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import ShopProvider from './context/ShopContext';


import Landing from './pages/Landing';
import Nav from './components/Nav';
import SecondaryNav from './components/SecondaryNav';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import ProductView from './pages/ProductView';
import About from './pages/About';
import Press from './pages/Press';
import Cart from './components/Cart';

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

function App() {

  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    setToggleNav(false);
  }, [])

  function onNavClick() {
    setToggleNav(!toggleNav);
  }

  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
          <Link to='/' className='logo'>Almost On Time</Link>

          {
            !toggleNav ? <Nav onNavClick={onNavClick}/> : <SecondaryNav onNavClick={onNavClick}/> 
          }
          <Cart />

          <Routes>
            <Route exact path='/' element={<Landing/>}/>
            <Route path='/shop/:id' element={<ProductView/>}/>
            <Route path='/shop' element={<ProductList/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/press' element={<Press/>}/>
          </Routes>

          <Footer/>
        </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
