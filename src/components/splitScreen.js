import leftImage from '../assets/ecomm dummy products/product8.4.webp';
import rightImage from '../assets/ecomm dummy products/product3.4.webp';
export default function splitScreen() {
  return (
    <div className="split">
        
            <div className='splitContentContainer'>
                <img src={leftImage}/>
                <div className='shop-link'>
                <a href='/'>shop vintage</a>
                </div>
            </div>

            <div className='splitContentContainer right-img'>
                <img src={rightImage}/>
                <div className='shop-link'>
                <a href='/'>shop reworks</a>
                </div>
            </div>

    </div>
  )
}
