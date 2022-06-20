import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function Logo() {

    const { clearSearch } = useContext(ShopContext)

  return (
    <div className='logo-container'>
       <Link to='/' className='logo' onClick={clearSearch}>Almost On Time</Link> 
    </div>
  )
}
