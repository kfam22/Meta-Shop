import React from 'react';
import { products } from '../dummy data/dummyProducts';
import ProductListCard from '../components/ProductListCard';

export default function ProductList() {
    console.log('products', products)
  return (
    <div className='productList'>
      {/* <div className='productMenu'>
        <div><p>tops</p></div>
        <div><p>bottoms</p></div>
        <div><p>dresses</p></div>
      </div> */}
     
        <div className='productGrid'>
          <a className='productMenu' href='/shop'>reworks</a>
          <a className='productMenu' href='/shop'>vintage</a>
          <a className='productMenu' href='/shop'>unique</a>
          <a className='productMenu' href=''></a>
        {
            products.map((card, idx) => {
                return <ProductListCard source={card.productImages[0]} name={card.productName} price={card.productPrice} idx={idx}/>
            })
        }
        </div>
    </div>
  )
}
