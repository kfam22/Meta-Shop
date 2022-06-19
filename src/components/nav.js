import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/bag-black-01.svg';

export default function Nav({onNavClick}) {

  // const element = <FontAwesomeIcon icon="fa-thin fa-magnifying-glass" />
  const { openCart } = useContext(ShopContext);
  const [toggleSearch, setToggleSearch] = useState(false);

  function onSearchClick() {
    setToggleSearch(!toggleSearch);
  }

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

        {
          toggleSearch ? 
          
          <div className='activeSearch'>
            <form>
              <input type='text'/>
            </form>
            
            <i class="material-icons" onClick={onSearchClick}>search</i>
          </div> :

          <div className='search'>
            <i class="material-icons" onClick={onSearchClick}>search</i>
          </div>
        }
        
        

    </nav>
  )
}
