import React from 'react';
import FilmskiLogo from '../ClubLogos/Filmski.jpg';
import Carousel from 'react-multi-carousel';
import Reveal from '../components/Reveal';
import { useState } from "react";
import MemberCard from '../components/MemberCard';
import bg from "../ClubLogos/bg3.jpg"
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
export default function Filmski() {
  const [selectedYear, setSelectedYear] = useState('2023-2024');

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
  return (
    <div className='relative min-h-screen text-black '>
       <div className="absolute inset-0 overflow-hidden">
      <img src={bg} className="object-cover w-full h-full fixed opacity-[80%]" alt="background"></img>
      <div className="bg-black opacity-70 absolute inset-0"></div>
      </div>
      <div className='relative pt-20 z-50 flex justify-center space-x-4'>
      <div className='text-center text-[#ebecf3] p-1  text-5xl font-bold'>
      Filmski
    </div>
    <div><img loading="lazy"  className='h-16 w-16  rounded-full p-2' alt="club-log" src={FilmskiLogo}></img></div>
      </div>
    
    <div className='lg:flex space-x-5 '>
    <div className='lg:flex lg:flex-col  lg:w-full space-y-4'>
      <Reveal>
      <div className='lg:ml-20 mx-5'>
<h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>About✨</h1>
<p className='font-medium text-[#ebecf3] leading-10'>Filmski, The Movie Club, is a vibrant and dynamic movie club at IIT Ropar.. We are a community of movie enthusiasts who are passionate about cinema and dedicated to creating a thriving movie culture on campus. Our club brings together students from diverse backgrounds who share a common love for movies, sports, and the joy of collective entertainment.
</p>
</div>
      </Reveal>

<div>
  <Reveal>
  <div className='lg:ml-20 mx-5'>
<h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>Vision✨</h1>
<p className='font-medium leading-10 text-[#ebecf3]'>At Filmski, our vision is to foster a deep appreciation for the art of filmmaking, build a sense of community among movie enthusiasts, and create a platform for students to engage in meaningful discussions about movies. We believe that movies have the power to inspire, entertain, and provoke conversations that transcend boundaries. Through our club, we aim to create a space where students can explore various genres, cultures, and perspectives, expanding their horizons and nurturing a lifelong love for cinema.
</p>

</div>
  </Reveal>

</div>
</div>


{/* <div className='hover:opacity-80 hover:scale-95 duration-300 my-auto'><img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 lg:mx-0 mx-auto border-white rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img></div> */}
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={3000}
  centerMode={false}
  className="lg:pl-24  mt-10  lg:w-[60%]"
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1,
      partialVisibilityGutter: 30
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
      items: 1,
      partialVisibilityGutter: 30
    }
  }}
  rewind={true}
  rewindWithAnimation={true}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>

<div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../Filmski/8.jpg")}></img></div>
    <div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log"src={require("../Filmski/3.jpg")}></img></div>
    <div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log"src={require("../Filmski/4.jpg")}></img></div>
    <div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log"src={require("../Filmski/5.jpg")}></img></div>
    <div className=''><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log"src={require("../Filmski/9.jpg")}></img></div>
    
</Carousel></div>
    <hr className=" border-2  mx-5 border-gray-300 mt-10" />

   



    <div className='relative ml:mx-36 mx-5 z-50'>
      <div>
        <h1 className='text-5xl mt-10 text-center text-[#ebecf3] font-bold mb-6'>Core Team</h1>
      </div>

      <div className='flex justify-center gap-1 '>
      <button
          className={` text-black px-4 text-2xl font-bold hover:scale-105 rounded-s-md ${selectedYear === '2023-2024' ? 'bg-[#c5eaf4]' : 'bg-white'}`}
          onClick={() => handleYearChange('2023-2024')}
        >
          2023-2024
        </button>
        <button
          className={` text-black px-4 text-2xl font-bold hover:scale-105 rounded-e-md ${selectedYear === '2022-2023' ? 'bg-[#c5eaf4]' : 'bg-white'}`}
          onClick={() => handleYearChange('2022-2023')}
        >
          2022-2023
        </button>
      </div>

      {/* Render the pictures based on the selected year */}
      {selectedYear === '2023-2024' && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
          <div className='mt-10 flex space-y-5 flex-col'>
            <div className='grid grid-cols-2 lg:mx-auto gap-10'>
            <MemberCard name="Shubhendu Kumar" number="+91 8887715399" position="Secretary" image="Shubhendu Kumar.jpg"/>
            
            <MemberCard name="Priyanshu Gupta" number="+91 8690912273" position="Representative" image="Priyanshu Gupta.jpg"/>

          </div>
          
          <div className='grid grid-cols-2 lg:grid-cols-4 mx-auto gap-10'>
          
          <MemberCard name="Bhargav Naidu" number="" position="Co-ordinator" image="Bhargav.jpg"/>
           <MemberCard name="Ankur Kumar" number="" position="Co-ordinator" image="AnkurKumar.jpg"/>    
          <MemberCard name="Hemang Tailor" number="" position="Co-ordinator" image="Hemang Tailor.jpg"/>
          <MemberCard name="Priyanshu Singh" number="" position="Co-ordinator" image="Priyanshu Singh.jpg"/>    
        
            


          
          </div>
          
        </div>
       </motion.div>
      )}

      {selectedYear === '2022-2023' && (
         <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
       >
         <div className='mt-10 flex space-y-5 flex-col'>
            <div className='grid grid-cols-2 lg:mx-auto gap-10'>
            <MemberCard name="Prem Dayal" number="+91 6299780199" position="Mentor" image="Prem Dayal.jpg"/>
            
            <MemberCard name="Shubhendu Kumar" number="+91 8887715399" position="Representative" image="Shubhendu Kumar.jpg"/>


          </div>
          <div>
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-10'>
          
          <MemberCard name="Karandeep Das" number="" position="Co-ordinator" image="karan deep das.jpg"/>
          <MemberCard name="Gaurav Wani" number="" position="Co-ordinator" image="Gaurav Wani.png"/>
          <MemberCard name="Harshit" number="" position="Co-ordinator" image="Harshit.jpg"/>
          <MemberCard name="Praneeth N" number="" position="Co-ordinator" image="Praneeth.jpg"/>
          <MemberCard name="Swaran Pratap Singh" number="" position="Co-ordinator" image="Swaran.jpg"/>
                
                

                

               
                
            

          </div>
          </div>
          
        </div>
        </motion.div>
      )}
    </div>

{/* <hr className=" border-2 mx-5 border-gray-300 mt-8" /> */}


<footer>
      <div className="footer-container mt-20 p-2 relative z-50 text-white">
      <h1 className='text-xl font-bold text-center my-auto'>Contact Us</h1>
        <div className="social-icons mx-auto flex gap-10 justify-center">
         
          <a href="https://www.instagram.com/filmski_iitropar/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className='text-white hover:text-[#c5eaf4]'/>
          </a>
          <a href="https://www.linkedin.com/company/filmski-club-iit-ropar/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className='text-white hover:text-[#c5eaf4]'/>
          </a>
          <a href="mailto:movie.club@iitrpr.ac.in" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={20} className='text-white hover:text-[#c5eaf4]'/>
          </a>
        </div>
      </div>
      
    </footer>
    </div>
  )
}



