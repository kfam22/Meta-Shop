import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/bag-black-01.svg';

export default function Nav({onNavClick}) {

  const { openCart } = useContext(ShopContext);

  return (
    <nav className='verticalNav'>
        <div className='cartIcon' onClick={() => openCart()}>
            <img src={cartIcon}/>
        </div>

        <div className='nav'>
        <p onClick={onNavClick}>shop</p>
        <Link to='/about'>about</Link>
        <Link to='/press'>press</Link>
        </div>
    </nav>
  )
}
