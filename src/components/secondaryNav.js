import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../assets/cart.png';


export default function SecondaryNav({onNavClick}) {
  return (

    <div>

    <div className='toggleNav secondaryNav'>
        <div className='nav2'>
            <Link to='/shop' onClick={onNavClick}>reworks</Link>
            <Link to='/shop' onClick={onNavClick}>vintage</Link>
            <Link to='/shop' onClick={onNavClick}>unique</Link>
        </div> 
    </div>

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
    
    </div>
  )
}
