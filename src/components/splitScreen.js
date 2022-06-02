import leftImage from '../assets/ecomm dummy products/product8.4.webp';
import rightImage from '../assets/ecomm dummy products/product3.4.webp';
export default function splitScreen() {
  return (
    <div className="split">
        
            <div className='splitContentContainer'>
                <img src={leftImage}/>
            </div>

            <div className='splitContentContainer right-img'>
                <div className='splitText'>
                <h1>vintage collection</h1>
                <p>some things only get better with age. we preserve history.  transform that which is has been deemed useles, and create a new aesthetic from the unexpected.explore our vintage collection with unique finds from different eras.</p>
                </div>
                <div className='shop-link'>
                <a href='/'>shop vintage</a>
                </div>
            </div>

    </div>
  )
}
