
import Grid from '../components/Grid';
import Carousel from '../components/Carousel';
import Marquee from '../components/Marquee';
import Newsletter from '../components/Newsletter';
import Swatches from '../components/Swatches';
import SplitScreen from '../components/SplitScreenLeft';
import SplitScreenRight from '../components/SplitScreenRight';
import InstagramFeedBar from '../components/InstagramFeedBar';


export default function Landing() {
  
  return (
    <div>
      <div className='landing'>
          {/* this div contains a background image */}
      </div>
      {/* <Marquee/> */}
      <Carousel/>
      <SplitScreenRight/>
      <SplitScreen/>
      <Swatches/>
      <Newsletter/>
      {/* <InstagramFeedBar/> */}
    </div>
  )
}
