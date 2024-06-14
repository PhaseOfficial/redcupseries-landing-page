import React, { useEffect } from 'react'
import logo3 from '../assets/images/real red cup.png';
import logo2a from '../assets/images/logo2a.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const blocks = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
    offset: 100, // Offset (in pixels) from the original trigger point
    easing: 'ease-in-out', // Easing function for the animation
        });
      }, []);
  return (
    <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20 border-t border-gray-800">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <div className='header1' data-aos="fade-down" data-aos-anchor="[data-aos-id-blocks]">
        <img src={logo3} className='logo3'/>
          <h2 className="mb-4">Why choose us</h2>
          </div>
          <p className="text-xl text-gray-400">RedCupSeries offers comprehensive digital services, including web development in Django and React, as well as graphic design for flyers, documents, and branded merchandise using Adobe tools.</p>
        </div>

        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

          {/* 1st item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          <img src={logo2a} className='icon1'/>
            <h4 className="h4 mb-2">Advanced Learning Analytics</h4>
            <p className="text-lg text-gray-400 text-center">Advanced Learning Analytics giving the world access to big data analytics driven Learning and teaching,  an evidence based approach to education</p>
          </div>

          {/* 2nd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
          <img src={logo2a} className='icon1'/>
            <h4 className="h4 mb-2">Optimizing Technology Systems</h4>
            <p className="text-lg text-gray-400 text-center">Optimizing technology systems to deliver heritage based knowledge and education to all students.</p>
          </div>

          {/* 3rd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
          <img src={logo2a} className='icon1'/>
            <h4 className="h4 mb-2">Beyond just software</h4>
            <p className="text-lg text-gray-400 text-center">Beyond just software and technology we are building an ecosystem of  heritage based educational research and innovation.</p>
          </div>

          {/* 4th item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
          <img src={logo2a} className='icon1'/>
            <h4 className="h4 mb-2">Enable access to quality</h4>
            <p className="text-lg text-gray-400 text-center">Enable access to quality and equitable education tailored to individual needs, via an intelligent Learning Management System</p>
          </div>

          {/* 5th item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
          <img src={logo2a} className='icon1'/>
            <h4 className="h4 mb-2">Innovating to transform </h4>
            <p className="text-lg text-gray-400 text-center">Innovating to transform the teaching and learning experience and improve education outcomes by harnessing technology to revolutionize education</p>
          </div>

          {/* 6th item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
          <img src={logo2a} className='icon1'/>
            <h4 className="h4 mb-2">Harnessing technology</h4>
            <p className="text-lg text-gray-400 text-center">Harnessing technology to augment human knowledge development and education , ensuring that it produces highly creative and innovative critical thinkers who are results oriented</p>
          </div>

        </div>

      </div>
    </div>
  </section>
  )
}

export default blocks
