import React from 'react'
import sc1 from '../assets/images/sc1.png';
import sc2 from '../assets/images/sc2.png';
import sc3 from '../assets/images/sc3.png';
import sc5 from '../assets/images/sc5.png';
import sc6 from '../assets/images/sc6.png';
import Marqueeimg from '../components/Marqueeimg';
import Marquee from "react-fast-marquee";

import d1 from '../assets/images/d1.png';
import d2 from '../assets/images/d2.png';
import d3 from '../assets/images/d3.png';
import d4 from '../assets/images/d4.png';
import d5 from '../assets/images/d5.png';
import d6 from '../assets/images/d6.png';
import d7 from '../assets/images/d7.png';
import d27 from '../assets/images/d27.png';
import d26 from '../assets/images/d26.png';

import d8 from '../assets/images/d8.png';
import d9 from '../assets/images/d9.png';
import d10 from '../assets/images/d10.png';
import d11 from '../assets/images/d11.png';
import d12 from '../assets/images/d12.png';
import d13 from '../assets/images/d13.png';
import d14 from '../assets/images/d14.png';
import d15 from '../assets/images/d15.png';
import d16 from '../assets/images/d16.png';
import d30 from '../assets/images/d30.png';
import d31 from '../assets/images/d31.png';
import d32 from '../assets/images/d32.png';
import d33 from '../assets/images/d33.png';
import d35 from '../assets/images/d35.png';

const zigzag = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 relative">
          <Marquee direction='left'>
  <div className="marquee-item"> <img src={d8} className='sc' /> </div> 
  <div className="marquee-item"><img src={d10} className='sc' /></div>
  <div className="marquee-item"> <img src={d11} className='sc' /></div>
  <div className="marquee-item"> <img src={d13} className='sc' /> </div>
   <div className="marquee-item"> <img src={d14} className='sc' /> </div>
    <div className="marquee-item"> <img src={d15} className='sc' /> </div> 
  <div className="marquee-item"> <img src={d16} className='sc' /> </div>
  <div className="marquee-item"><img src={d12} className='sc' /> </div>
  <div className="marquee-item"><img src={d9} className='sc' /> </div>
  <div className="marquee-item"><img src={d30} className='sc' /> </div>
  <div className="marquee-item"><img src={d31} className='sc' /> </div>
  <div className="marquee-item"><img src={d32} className='sc' /> </div>
  <div className="marquee-item"><img src={d33} className='sc' /> </div>
  <div className="marquee-item"><img src={d35} className='sc' /> </div>
  

  </Marquee>
 
  <div className="sec_text inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Mindset is Everything</div>
  <h1 className="mb-4"
  style={{
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontFamily: 'Montserrat Black, sans-serif'
  }}>We help brands drive growth through digital experiences</h1>
  <p className="text-xl text-gray-400">RedCupSeries is a brand that prioritizes exceptional quality in its products, fostering a vibrant lifestyle for its customers. Committed to excellence, the brand empowers individuals to embrace a fulfilling and dynamic way of living.</p>
</div>      
         <div class="border-line"></div>
        
  <p style={{
    marginTop: '10vh',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontFamily: 'Montserrat Black, sans-serif'
  }}
  >We craft digital experiences that drive results</p>
  <div className="sec_text inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Mindset is Everything</div>


          {/* Items */}
          <div className="grid gap-20 zigzags">
             {/* 2nd item */}
             <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
              <img src={sc1} className='sc'/>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spent</div>
                  <h3 className="h3 mb-3">Expertly crafted user experiences.</h3>
                  <p className="text-xl text-gray-400 mb-4">Our UI design process in Figma involves meticulously crafting pixel-perfect interfaces, optimizing user flows, and leveraging cutting-edge design tools to deliver visually stunning and functionally seamless digital experiences.
</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Pixel-perfect Figma interfaces, seamless flows.
</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Cutting-edge tools craft stunning UX.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Meticulously designed digital experiences.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
              <img src={sc2} className='sc'/>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spent</div>
                  <h3 className="h3 mb-3">Crafting impactful, distinctive logos.</h3>
                  <p className="text-xl text-gray-400 mb-4">Our logo design process in Adobe Illustrator involves meticulous attention to detail, strategic use of typography and visual elements, and a deep understanding of brand identity to create memorable, versatile logos that leave a lasting impression.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Iconic logos, expertly crafted in Illustrator.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Impactful brand identity through visual mastery.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Versatile logos, meticulously designed for impact.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
              <img src={sc3} className='sc'/>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spent</div>
                  <h3 className="h3 mb-3">Comprehensive, high-performing software solutions.</h3>
                  <p className="text-xl text-gray-400 mb-4">Our software development expertise spans Python and Django, as well as HTML, JavaScript, and CSS with React. We readily adapt to any language or framework needed to deliver comprehensive, high-performing solutions tailored to the unique requirements of each project.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Adaptable software development expertise.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Python, Django, React mastery delivered.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Tailored solutions, any language, framework.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

           

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img src={sc5} className='sc'/>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spent</div>
                  <h3 className="h3 mb-3">Unparalleled document design expertise.</h3>
                  <p className="text-xl text-gray-400 mb-4">Our document creation and design expertise spans developing stunning digital assets, including captivating children's books, as well as a wide range of professional documents tailored to our clients' unique needs and brand identities.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Crafting captivating digital assets and documents.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Exceptional children's book design solutions.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Tailored professional documents, brand-aligned.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
             {/* 2nd item */}
             <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
              <img src={sc6} className='sc'/>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spent</div>
                  <h3 className="h3 mb-3">Exceptional quality, enduring excellence.</h3>
                  <p className="text-xl text-gray-400 mb-4">We are committed to providing high-quality, durable clothing that exceeds your expectations. Our 100% cotton t-shirts, hoodies, and other items are crafted with meticulous attention to detail. Our designer meticulously creates graphics of the highest caliber, ensuring a premium look and feel that elevates your style.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Elevated style, exceptional quality.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Premium designs, enduring comfort.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Crafted with care, built to last.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className='marqueehead'>
  <h1 className="mb-4"
  style={{
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontFamily: 'Montserrat Black, sans-serif'
  }}>These are some of the items we have worked on</h1>
  <p className="text-xl text-gray-400">RedCupSeries is a brand that prioritizes exceptional quality in its products, fostering a vibrant lifestyle for its customers. Committed to excellence, the brand empowers individuals to embrace a fulfilling and dynamic way of living.</p>
  
  </div>
      </div>

     
      <div className='marquees'>
        
        <Marquee>
        
        <div className="marquee-item">
    <img src={d7} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d4} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d5} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d27} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d6} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d1} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d2} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d3} className='sc' />
  </div>
  <div className="marquee-item">
    <img src={d26} className='sc' />
  </div>
</Marquee>



        <Marqueeimg />
        </div>
    </section>
  )
}

export default zigzag
