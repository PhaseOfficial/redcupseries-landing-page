import React from 'react'
import { useRef } from 'react'
import weblogo from '../assets/images/weblogo.png';
import blue from '../assets/images/bluenebula.jpeg';
import { motion, useScroll, useTransform } from 'framer-motion';


const MultiLayerParallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <div ref={ref}
         className='hero'>
            <div className='logo-div'>
                <motion.img src={weblogo} alt='logo' className='logo-home' style={{y: textY }}/>
             </div>
            <motion.div className='blue'
                            style={{
                                     backgroundImage: `url(${blue})`,
                                     backgroundSize: 'cover',
                                     y: backgroundY,
              
                                     }}/>

            
<div className='clouds'
  style={{
    display: 'flex',
    marginTop: '30vh',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontFamily: 'Montserrat Black, sans-serif'
  }}>
  OUR CREATIVITY IS FROM OUT OF THIS WORLD
</div>

            
   
    </div>
  )
}

export default MultiLayerParallax
