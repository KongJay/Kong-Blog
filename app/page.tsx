
import {HomeBackground} from './components/home/HomeBackground';
import { HomeHero } from './components/home/HomeHero';
export default function Home() {
  return (
    <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', width: '100%', height: '100vh'}}>
      {/* 背景层 */}
      <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}}>
        <HomeBackground/>
        {/* Webcam pixel grid overlay */}
        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
          <HomeHero />
        </div>
      </div>
    
    </div>
  );
}
