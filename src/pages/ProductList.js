import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductListCard from '../components/ProductListCard';

export default function ProductList() {
  
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
      fetchAllProducts()
      return () => {

      }
  }, [fetchAllProducts])

  if(products[0] === undefined) return <div className='productList'></div>

  return (
    <div className='productList'>
     
        <div className='productGrid'>
          {/* <div className='productListDescription'>current collection name</div> */}
          <a className='productMenu reworks' href='/shop'>reworks</a>
          <a className='productMenu' href='/shop'>vintage</a>
          <a className='productMenu' href='/shop'>unique</a>
          <a className='productMenu' href=''></a>
        {
            products.map((product) => {
                return <ProductListCard product={product} key={product.id}/>
            })
        }
        </div>
    </div>
  )
}
