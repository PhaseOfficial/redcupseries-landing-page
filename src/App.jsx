import React from 'react';
import './App.css';
import MultiLayerParallax from '../src/components/MultiLayerParallax'
import Blocks from '../src/components/Blocks'
import Zigzag from './components/Zigzag';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

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
    
    <div class="footer-section">
      <h3>Follow Us</h3>
      <div class="social-media">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaXTwitter /></a>
        <a href="#"><FaSquareInstagram /></a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 redcupseries. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default App