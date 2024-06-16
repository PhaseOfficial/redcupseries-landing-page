import React from "react";
import Marquee from "react-fast-marquee";


import d17 from '../assets/images/d17.png';
import d18 from '../assets/images/d18.png';
import d19 from '../assets/images/d19.png';
import d20 from '../assets/images/d20.png';
import d21 from '../assets/images/d21.png';
import d22 from '../assets/images/d22.png';
import d23 from '../assets/images/d23.png';
import d24 from '../assets/images/d24.jpg';
import d25 from '../assets/images/d25.jpg';
import d28 from '../assets/images/d28.png';
import d34 from '../assets/images/d34.png';

const App = () => (
  <Marquee direction="right">
  <div className="marquee-item"><img src={d28} className='sc' /> </div>
  <div className="marquee-item">
     <img src={d20} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d21} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d25} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d24} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d22} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d17} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d19} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d18} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d23} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d34} className='sc' />
  </div>
  </Marquee>
);

export default App;