import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../dummy data/dummyProducts';


export default function ProductView() {
    const { id } = useParams();
    const [product, setProduct] = useState(products[id])
  return (
    <div className='productView'>
        
        <div className='productLeft'>
            <img src={product.productImages[1]}/>
        </div>

        <div className="productRight">
            <div className='product-info-img'>
            <img src={product.productImages[0]}/>
            </div>

            <div className='productInfo'>
                <div className='description'>
                <h1>{product.productName}</h1>
                <p>info about this product</p>
                <p>more info about this product</p>
                <p>put something here</p>
                </div>

                <div className='sizing'>
                    <p className='select'>select size</p>
                    <div className='sizes'>
                        <div><p>xs</p></div>
                        <div><p>s</p></div>
                        <div><p>m</p></div>
                        <div><p>l</p></div>
                        <div><p>xl</p></div>
                    </div>
                    <p className='add'>add to bag</p>
                </div>
            </div>
        </div>
    </div>
  )
}
