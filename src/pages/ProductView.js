import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';


export default function ProductView() {
    const { fetchProductById, addItemToCheckout, product } = useContext(ShopContext);
    const { id } = useParams();
    const strId = 'gid://shopify/Product/' + id;

    useEffect(() => {
        fetchProductById(strId)
    }, [fetchProductById, strId])

  return (
    <div className='productView'>
        <div className='productLeft'>
            <img src={product.images[1].src}/>
        </div>

        <div className="productRight">
            <div className='product-info-img'>
            <img src={product.images[0].src}/>
            </div>

            <div className='productInfo'>
                <div className='description'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
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
