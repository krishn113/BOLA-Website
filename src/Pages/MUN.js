import React from 'react';
import MUNLogo from '../ClubLogos/mun_logo.jpeg';
import Carousel from 'react-multi-carousel';
import Reveal from '../components/Reveal';
import { useState } from "react";
import { motion } from 'framer-motion';
import MemberCard from '../components/MemberCard';
import bg from "../ClubLogos/bg3.jpg"
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
export default function MUN() {
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
      <div className='text-center text-[#ebecf3] lg:p-1  p-2 text-2xl lg:text-5xl font-bold'>
      Model United Nations
    </div>
    <div><img loading="lazy"  className='lg:h-16 lg:w-16 h-12 w-12 rounded-full p-2' alt="club-log" src={MUNLogo}></img></div>
      </div>
    
    <div className='lg:flex space-x-5 '>
    <div className='lg:flex lg:flex-col  lg:w-full space-y-4'>
      <Reveal>
      <div className='lg:ml-20 mx-5'>
<h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>About✨</h1>
<p className='font-medium text-[#ebecf3] leading-10'>MUN is an exceptional platform for students interested in global affairs, diplomacy, and debating. It offers an opportunity to enhance your public speaking, critical thinking, negotiation, and leadership skills—all while having a great time collaborating with fellow students who share a passion for international issues.
</p>
</div>
      </Reveal>

<div>
  <Reveal>
  <div className='lg:ml-20 mx-5'>
<h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>Vision✨</h1>
<p className='font-medium leading-10 text-[#ebecf3]'>We at the MUN Club of IIT Ropar aim to provide you all an experience, a platform, an environment and an atmosphere to feel the core essence of a MUN conference by training from basics and helping to bring out the inner delegate in you.</p>

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

<div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../MUN/1.png")}></img></div>
    <div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../MUN/2.png")}></img></div>
    <div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../MUN/3.png")}></img></div>
    <div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../MUN/4.png")}></img></div>

   
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
          <div className='mt-10 flex space-y-5 px-1 lg:px-20  flex-col'>
            <div className='grid grid-cols-2 lg:mx-auto gap-10'>
            <MemberCard name="Ashmit Gupta" number="+91 8685062494" position="Advisor" image="Ashmit_.jpg"/>
            
            <MemberCard name="Anshika Bhatia" number="+91 8091099185" position="Secretary" image="Anshika_.jpg"/>
            
          </div>
          <div>
          <div className='grid grid-cols-2  lg:grid-cols-5 gap-10'>
          <MemberCard name="Akshat Pathak" number="+91 9205829199" position="Representative" image="Akshat Pathak.jpg"/>
                
          <MemberCard name="Ananya Sethi" number="" position="Co-ordinator" image="Ananya Sethi.jpg"/>
          <MemberCard name="Aryan Daga" number="" position="Co-ordinator" image="Aryan daga.jpg"/>
          <MemberCard name="Yash Vij" number="" position="Co-ordinator" image="Yash vij.jpg"/>    
          <MemberCard name="Bhavana Ginuga" number="" position="Co-ordinator" image="Bhavana Ginuga.jpg"/>
               

                 

               
                
            

          </div>
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
            <MemberCard name="Akshat" number="+91 8279833510" position="Mentor" image="Akshat_.jpg"/>
            
            <MemberCard name="Ashmit Gupta" number="+91 8685062494" position="Representative" image="Ashmit_.jpg"/>

          </div>
         
          <div className='grid grid-cols-2 lg:mx-auto gap-10 '>
             
          <MemberCard name="Abhishek Jaiswal" number="" position="Co-ordinator" image="Abhishek Jaiswal.jpg"/>
          
          <MemberCard name="Harshit" number="" position="Co-ordinator" image="Harshit.jpg"/>
          </div>
          
          
        </div>
        </motion.div>
      )}
    </div>

<hr className=" border-2 mx-5 border-gray-300 mt-8" />
<div className='lg:mx-36 mx-5 relative z-50'>
  <h1 className='text-4xl mt-10 font-bold mb-6 text-[#ebecf3]'>Achievements🏆</h1>
      <div className='gird gird-cols-1 pb-10 '>
        <div>
          <h1 className='text-2xl mt-5 font-bold mb-3 text-white'>
          CGC MUN-22

          </h1>
          <p className='leading-10 text-[#ebecf3]'>2 special mentions and 1 honorable mention at CGC MUN-22</p>
        </div>
        <div>
          <h1 className='text-2xl mt-5 font-bold mb-3 text-white'>
          Intra-College MUN 2020

          </h1>
          <p className='leading-10 text-[#ebecf3]'>Successfully organized Intra-College MUN 2020 with Chief guest - Mr Vivek Atray ( Ex - IAS Officer, TEDex speaker and Indian Author) 
</p>
        </div>
        <div>
          <h1 className='text-2xl mt-5 font-bold mb-3 text-white'>
          LitFI MUN 2019

          </h1>
          <p className='leading-10 text-[#ebecf3]'>Organized LitFI MUN 2019 :
UNGA-DISEC – DISCUSSION ON THREATS TO INTERNATIONAL PEACE AND SECURITY DUE TO CYBERSPACE</p>
<p className='leading-10 text-[#ebecf3]'>

AIPPM – DISCUSSION ON THE POSSIBILITIES OF PRIVATIZATION OF INDIAN RAILWAYS AND PUBLIC SECTOR UNDERTAKINGS
</p>
        </div>
        
        
        
      </div>
</div>
<footer>
      <div className="footer-container p-2 relative z-50 text-white">
      <h1 className='text-xl font-bold text-center my-auto'>Contact Us</h1>
        <div className="social-icons mx-auto flex gap-10 justify-center">
         
          <a href="https://www.instagram.com/mun_iitrpr/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className='text-white hover:text-[#c5eaf4]'/>
          </a>
          <a href="https://www.linkedin.com/company/mun-society-iit-ropar/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className='text-white hover:text-[#c5eaf4]'/>
          </a>
          <a href="mailto:mun@iitrpr.ac.in" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={20} className='text-white hover:text-[#c5eaf4]'/>
          </a>
        </div>
      </div>
      
    </footer>
    </div>
  )
}



