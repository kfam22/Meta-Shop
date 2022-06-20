import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {

  return (
    <div className='logo-container'>
       <Link to='/' className='logo'>Almost On Time</Link> 
    </div>
  )
}
