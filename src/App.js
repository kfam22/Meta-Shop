import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Landing from './components/landing';
import Nav from './components/nav';
import Footer from './components/footer';
import ProductView from './components/productView';
import About from './components/about';
import Press from './components/press';

function App() {
  return (
    <div>
      <Link to='/' className='logo'>Almost On Time</Link>
      <Nav/>

      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/view-product' element={<ProductView/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/press' element={<Press/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
