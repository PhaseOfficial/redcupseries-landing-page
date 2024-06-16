import React, { useEffect } from 'react'
import logo3 from '../assets/images/real red cup.png';
import logops from '../assets/images/ps.png';
import logoai from '../assets/images/ai.png';
import logofg from '../assets/images/fg.png';
import logodj from '../assets/images/dj.png';
import logorc from '../assets/images/react.svg';
import logorcs from '../assets/images/rcs.png';
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
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 section_header">
        <div className='header1' data-aos="fade-down">
        <img src={logo3} className='logo3'/>
          </div>
          <p className="text-xl text-gray-400">RedCupSeries is a lifestyle brand that sells Fashion pieces and offers comprehensive digital services, including web development in Django and React, as well as graphic design for flyers, documents, and branded merchandise using various tools.</p>
        </div>

        <div class="border-line"></div>

        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none items" data-aos-id-blocks>

          {/* 1st item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          <img src={logops} className='icon1'/>
            <h4 className="h4 mb-2">Masterful Photoshop Artistry</h4>
            <p className="text-lg text-gray-400 text-center">We design visually stunning graphics for websites, branding, and marketing campaigns in Photoshop, meticulously crafting each element with an unwavering commitment to detail and perfection.</p>
          </div>

          {/* 2nd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
          <img src={logoai} className='icon1'/>
            <h4 className="h4 mb-2">Illustrative Mastery Unparalleled</h4>
            <p className="text-lg text-gray-400 text-center">In Adobe Illustrator, we create impactful logos and comprehensive brand identity systems for fashion brands, companies, and individuals, ensuring their visual presence is captivating and distinct.</p>
          </div>

          {/* 3rd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
          <img src={logofg} className='icon1'/>
            <h4 className="h4 mb-2">Figma Design Virtuosity</h4>
            <p className="text-lg text-gray-400 text-center">In Figma, we design intuitive websites and web applications, leveraging the powerful capabilities of Django, React, and Flatter to deliver seamless digital experiences.</p>
          </div>

          {/* 4th item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
          <img src={logodj} className='icon1'/>
            <h4 className="h4 mb-2">Proficient Django Craftsmanship</h4>
            <p className="text-lg text-gray-400 text-center">We develop robust and scalable web applications and website backends using the powerful Django framework, ensuring secure and efficient server-side functionality.</p>
          </div>

          {/* 5th item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
          <img src={logorc} className='icon1'/>
            <h4 className="h4 mb-2">Masterful React Artistry</h4>
            <p className="text-lg text-gray-400 text-center">Leveraging the flexibility and efficiency of React, we develop dynamic and responsive web applications and websites with seamless user experiences.</p>
          </div>

          {/* 6th item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
          <img src={logorcs} className='iconrcs'/>
            <h4 className="h4 mb-2">Life Style Brand</h4>
            <p className="text-lg text-gray-400 text-center">We are a lifestyle brand that harnesses creativity to elevate the realms of technology, art, fashion, and events, brightening every aspect of life. We are not limited by tools, but by the bounds of the unknown universe.</p>
          </div>

        </div>

      </div>
    </div>
  
  </section>
  )
}

export default blocks
