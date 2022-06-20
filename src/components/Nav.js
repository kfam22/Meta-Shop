import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import cartIcon from '../assets/bag-black-01.svg';

export default function Nav({onNavClick}) {

  const { openCart } = useContext(ShopContext);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const onSearchChange = e => {
    setSearchInput(e.target.value)
  };

  function onSearchClick() {
    setToggleSearch(!toggleSearch);
  }

  function formatInput(input) {
    let format = input.split(' ');
    return format.join('-');
  }

  function onSearchSubmit(e) {
    e.preventDefault();
    const search = formatInput(searchInput);
    navigate(`/search/${search}`);
    setSearchInput('');
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
            <form onSubmit={onSearchSubmit}>
              <input 
              name='search'
              type='text'
              value={searchInput}
              onChange={onSearchChange}
              />
            </form>
            
            <div className='closeSearch'>
              <i className="material-icons close" onClick={onSearchClick}>close</i>
              <i className="material-icons" onClick={onSearchSubmit}>search</i>
            </div>
          </div> :

          <div className='search'>
            <i className="material-icons" onClick={onSearchClick}>search</i>
          </div>
        }
        
        

    </nav>
  )
}
