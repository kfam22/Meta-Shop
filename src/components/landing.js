import Grid from './grid';
import Carousel from './carousel';
import Marquee from './marquee';
import Newsletter from './newsletter';
import SplitScreen from './splitScreen';
import InstagramFeedBar from './instagramFeedBar';


export default function landing() {
  return (
    <div>
      <div className='landing'>
          {/* this div contains a background image */}
      </div>
      <Marquee/>
      <Carousel/>
      <Newsletter/>
      <SplitScreen/>
      <InstagramFeedBar/>
    </div>
  )
}
