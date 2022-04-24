import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Landing from './components/landing';
import Nav from './components/nav';
import Footer from './components/footer';
import ProductView from './components/productView';

function App() {
  return (
    <div>
      <Link to='/' className='logo'>Almost On Time</Link>
      <Nav/>

      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/view-product' element={<ProductView/>}/>

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
