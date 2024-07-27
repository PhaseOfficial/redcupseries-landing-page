import React from 'react';
import './App.css';
import MultiLayerParallax from '../src/components/MultiLayerParallax'
import Blocks from '../src/components/Blocks'
import Zigzag from './components/Zigzag';
import AOS from 'aos';
import 'aos/dist/aos.css';
  

const App = () => {
  return (
    <div className='land'>
    <MultiLayerParallax />
    <div className='land-content'>
		<section>
    <Blocks />
    
    <Zigzag />
    
    </section>

    
    </div>
    <footer>
  <div class="footer-content">
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 redcupseries. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default App