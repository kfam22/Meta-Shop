import product1 from '../assets/ecomm dummy products/product1.1.webp';
import product2 from '../assets/ecomm dummy products/product1.2.webp';


export default function productView() {
  return (
    <div className='productView'>
        
        <div className='productLeft'>
            <img src={product2}/>
        </div>

        <div className="productRight">
            <img src={product1}/>
            <div className='productInfo'>
                <div className='description'>
                <h1>product 1</h1>
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
