import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductListCard from '../components/ProductListCard';

export default function SearchResults() {

  const { fetchAllProducts, products } = useContext(ShopContext);
  const { query } = useParams();

  useEffect(() => {
      fetchAllProducts()
      return () => {

      }
  }, [fetchAllProducts]);

   function formatInput(input) {
    let format = input.split('-').map(word => word[0].toUpperCase() + word.slice(1));
    return format.join(' ');
  }

  const filteredProducts = products.filter(product => { return product.title.includes(formatInput(query)) === true});
  console.log('search input', formatInput(query),'filtered products', filteredProducts);

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
            filteredProducts.map((product) => {
                return <ProductListCard product={product} key={product.id}/>
            })
        }
        </div>
    </div>
  )
}