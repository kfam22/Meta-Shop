import cart from '../assets/cart.png';
import { Link } from 'react-router-dom';

export default function nav({onNavClick}) {
  return (
    <div className='verticalNav'>
        <div className='cart'>
            <img src={cart}/>
        </div>

        <div className='nav'>
        <p onClick={onNavClick}>shop</p>
        <Link to='/about'>about</Link>
        <Link to='/press'>press</Link>
        </div>
    </div>
  )
}
