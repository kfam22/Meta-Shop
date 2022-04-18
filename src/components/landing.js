import Grid from './grid';
import Carousel from './carousel';
import Marquee from './marquee';
import SplitScreen from './splitScreen';
import landingImage from '../assets/nike1.png';

export default function landing() {
  return (
    <div>
      <div className='landing'>
          {/* <img src={landingImage}/> */}
      </div>
      <Marquee/>
      <Carousel/>
      <SplitScreen/>
    </div>
  )
}
