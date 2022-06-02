import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductListCard(props) {
    const { source, name, price, idx } = props;
  return (
    <Link to={`/shop/${idx}`} className='productCard'>
        <img src={source}/>
        <div className='productCardDetails'>
        <p>{name}</p>
        <p>{price}</p>
        </div>
    </Link>
  )
}
