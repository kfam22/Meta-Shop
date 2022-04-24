import cart from '../assets/cart.png';
import { Link } from 'react-router-dom';

export default function nav() {
  return (
    <div className='verticalNav'>
        <div className='cart'>
            <img src={cart}/>
        </div>

        <div className='nav'>
        <Link to='/view-product'>shop</Link>
        <Link to='/'>about</Link>
        <Link to='/'>press</Link>
        </div>
    </div>
  )
}
