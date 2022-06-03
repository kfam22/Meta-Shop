import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ShopProvider from './context/ShopContext';


import Landing from './pages/Landing';
import Nav from './components/Nav';
import SecondaryNav from './components/SecondaryNav';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import ProductView from './pages/ProductView';
import About from './pages/About';
import Press from './pages/Press';

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
        <Link to='/' className='logo'>Almost On Time</Link>

        {
          !toggleNav ? <Nav onNavClick={onNavClick}/> : <SecondaryNav onNavClick={onNavClick}/> 
        }

        <Routes>
          <Route exact path='/' element={<Landing/>}/>
          <Route path='/shop/:id' element={<ProductView/>}/>
          <Route path='/shop' element={<ProductList/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/press' element={<Press/>}/>
        </Routes>

        <Footer/>
    </ShopProvider>
  );
}

export default App;
