import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { dummyProducts } from '../dummy data/dummyProducts'; 


export default function ProductView() {
    const { fetchProductById, addItemToCheckout, product, openCart } = useContext(ShopContext);
    let { id } = useParams();
    const strId = 'gid://shopify/Product/' + id;
    const [variantId, setVariantId] = useState('')

    useEffect(() => {
        fetchProductById(strId)
        return () => {

        };
    }, [fetchProductById, strId]);

    function setSizeVariant(variant) {
        setVariantId(variant.id);
    }

    function handleAddClick(variantId, quantity) {
        addItemToCheckout(variantId, quantity);
        openCart();
    }

    if(product.images === undefined || product.variants === undefined) return <div className='productView'></div>

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
                {/* <p>more info about this product</p>
                <p>put something here</p> */}
                </div>

                <div className='sizing'>
                    <p className='select'>select size</p>
                    <div className='sizes'>
                        {
                            product.variants.map((variant, idx) => {
                                return <div
                                className={variantId === variant.id ? 'selectedSize' : ''}
                                onClick={() => setSizeVariant(variant)} key={idx}><p>{variant.title}</p></div>
                            })
                        }
                    </div>
                    <button className='add' onClick={() => handleAddClick(variantId, 1)}>add to bag</button>
                </div>
            </div>
        </div>
    </div>
  )
}
