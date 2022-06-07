import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import cart from '../assets/bag-black-01.svg';


export default function SecondaryNav({onNavClick}) {

  const { openCart } = useContext(ShopContext);

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
            <div className='cartIcon' onClick={() => openCart()}>
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
