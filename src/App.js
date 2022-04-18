import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import Nav from './components/nav';
import Footer from './components/footer';
import ProductView from './components/productView';
function App() {
  return (
    <div>
      <h1 className='logo'>Almost On Time</h1>
      <Nav/>
      <Landing/>
      <ProductView/>
      <Footer/>
    </div>
  );
}

export default App;
