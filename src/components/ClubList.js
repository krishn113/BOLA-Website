import React from 'react'

import {Link} from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AlfaazLogo from '../ClubLogos/Alfaaz.jpg';
import Reveal from './Reveal';
import Tilt from 'react-parallax-tilt';

export default function ClubList() {
  return (
   
    <div name="clubs" className='lg:px-48 pt-36 px-5  '>
      <Reveal>
      <h1 className='text-4xl px-4 text-left lg:text-center text-[#c5eaf4] font-bold mb-6'>Clubs under BOLA</h1>
    <hr className="w-full border-2 border-gray-300 mt-8" />
    <p className='mt-8 px-4 font-semibold text-lg text-white  text-justify leading-10 mb-5 '>Under the auspices of the Board of Literary Affairs, we are proud to present seven distinct clubs that encompass a wide range of literary pursuits. These clubs offer a unique platform for students to engage in various forms of expression, explore their creativity, and hone their literary skills.
</p>
      
    
      </Reveal>
     
    <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className="lg:ml-8"
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={true}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 2,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>

<Tilt><Link to="/clubs/Alfaaz"  smooth duration={500}><div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 border-white rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img></div></Link></Tilt>
<Tilt><Link to="/clubs/DebSoc" smooth duration={500}><div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 border-white rounded-2xl p-2' alt="club-log"src="DebSoc.png"></img></div></Link>
</Tilt><Tilt><Link to="/clubs/Enigma" smooth duration={500}><div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 border-white rounded-2xl p-2' alt="club-log"src="Enigma.jpeg"></img></div></Link>
</Tilt><Tilt><Link to="/clubs/Filmski" smooth duration={500}><div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 border-white rounded-2xl p-2' alt="club-log"src="Filmski.jpg"></img></div></Link>
</Tilt><Tilt><Link to="/clubs/MUN" smooth duration={500}><div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 border-white rounded-2xl p-2' alt="club-log"src="mun_logo.jpeg"></img></div></Link>
</Tilt><Tilt><Link to="/clubs/Alpha" smooth duration={500}><div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 border-white rounded-2xl p-2' alt="club-log" src="Alpha Productions.jpg"></img></div></Link>
</Tilt><Tilt><Link to="/clubs/Enarrators" smooth duration={500}><div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 border-white rounded-2xl p-2' alt="club-log"src="Enarrators.PNG"></img></div></Link>
</Tilt>
</Carousel>
    

  </div>
  )
}
