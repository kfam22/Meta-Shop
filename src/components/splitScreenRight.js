import leftImage from '../assets/ecomm dummy products/product8.4.webp';
import rightImage from '../assets/ecomm dummy products/product3.4.webp';
export default function splitScreen() {
  return (
    <div className="split">
        
            <div className='splitContentContainer'>
                <div className='splitText'>
                <h1>fashion re-imagined</h1>
                <p>With each garment, we strive to re-purpose and re-imagine that which inpires us into something new.  Our goal is to create compelling product without sacrificing quality or artistic integrity.  We believe in creating a unique experience and doing things a little differently.  Our philosophy is simple: collaborate, create, and rebel.</p>
                </div>
                <div className='shop-link'>
                <a href='/shop'>shop reworks</a>
                </div>
            </div>

            <div className='splitContentContainer right-img'>
                <img src={rightImage}/>
            </div>

    </div>
  )
}
