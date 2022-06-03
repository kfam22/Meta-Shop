import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductListCard(props) {
    const { product } = props;
    // const slug = product.title.toLowerCase().split(' ').join('-')
    const id = product.id.replace(/\D/g, "");
  return (
    <Link to={`/shop/${id}`} className='productCard'>
        <img src={product.images[0].src}/>
        <div className='productCardDetails'>
        <p>{product.title}</p>
        <p>{product.variants[0].price}</p>
        </div>
    </Link>
  )
}