import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import Nav from './components/nav';

function App() {
  return (
    <div>
      <h1 className='logo'>Almost On Time</h1>
      <Nav/>
      <Landing/>
    </div>
  );
}

export default App;
