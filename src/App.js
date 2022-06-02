import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Landing from './components/landing';
import Nav from './components/nav';
import SecondaryNav from './components/secondaryNav';
import Footer from './components/footer';
import ProductList from './components/productList';
import ProductView from './components/productView';
import About from './components/about';
import Press from './components/press';

function App() {

  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    setToggleNav(false);
  }, [])

  function onNavClick() {
    setToggleNav(!toggleNav);
  }

  return (
    <div>
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
    </div>
  );
}

export default App;
