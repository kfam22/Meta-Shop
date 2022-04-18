import leftImage from '../assets/ecomm dummy products/product8.4.webp';
import rightImage from '../assets/ecomm dummy products/product3.4.webp';
export default function splitScreen() {
  return (
    <div className="split">
        
        <div className='splitContainer'>
            <div className='splitContentContainer'>
                <div className="splitLeft">
                    <img src={leftImage}/>
                </div>
                <h1>shop vintage</h1>
            </div>

            <div className='splitContentContainer'>
                <div className="splitRight">
                    <img src={rightImage}/>
                </div>
                <h1>shop reworks</h1>
            </div>
        </div>

    </div>
  )
}
