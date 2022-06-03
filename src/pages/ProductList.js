import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductListCard from '../components/ProductListCard';

export default function ProductList() {
  
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
      fetchAllProducts()
  }, [fetchAllProducts])
  // console.log(products)


  if(!products) return <div>loading</div>

  return (
    <div className='productList'>
     
        <div className='productGrid'>
          <a className='productMenu' href='/shop'>reworks</a>
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
