import React from 'react';
import EnigmaLogo from '../ClubLogos/Enigma.jpeg';
import Carousel from 'react-multi-carousel';
import Reveal from '../components/Reveal';
import { useState } from "react";
import MemberCard from '../components/MemberCard';
import bg from "../ClubLogos/bg3.jpg"
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
export default function Enigma() {
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
      Enigma
    </div>
    <div><img loading="lazy"  className='h-16 w-16  rounded-full p-2' alt="club-log" src={EnigmaLogo}></img></div>
      </div>
    
    <div className='lg:flex space-x-5 '>
    <div className='lg:flex lg:flex-col  lg:w-full space-y-4'>
      <Reveal>
      <div className='lg:ml-20 mx-5'>
<h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>About✨</h1>
<p className='font-medium text-[#ebecf3] leading-10'>Enigma, the quizzing and puzzles club of IIT Ropar, is a family of vibrant intellectuals and frenzy brainiacs who share a passion for quizzing and solving puzzles, bringing enticing moments and sagacious discussions together on the table. Enigma fosters an environment that encourages critical thinking, problem solving and the pursuit of knowledge. 
Brain teasers, logic puzzles, cryptic challenges, riddles and what not! If you have a zeal towards showcasing your intellectual prowess and exploring new horizons, then Enigma is the club for you! We heartily welcome you to become a part of this flamboyant community and foster a culture of intellectual curiosity.
</p>
</div>
      </Reveal>

<div>
  <Reveal>
  <div className='lg:ml-20 mx-5'>
<h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>Vision✨</h1>
<p className='font-medium leading-10 text-[#ebecf3]'>Inspiring minds, unleashing intelligence and forging connections - to foster a culture of curiosity, knowledge sharing, collaborative learning and intellectual growth along with fun and camaraderie. We aim to transform Enigma into a club that is recognized for its intellectual rigor, collaborative spirit and positive impact with regular participation in inter-college competitions.
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

<div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../Enigma/1.jpg")}></img></div>
    <div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log"src={require("../Enigma/4.jpg")}></img></div>
    <div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log"src={require("../Enigma/5.jpg")}></img></div>
    <div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log"src={require("../Enigma/6.jpg")}></img></div>
    
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
            <div className='grid grid-cols-3 lg:mx-auto gap-10'>
            <MemberCard name="Kartik Tiwari" number="+91 8847523470" position="Secretary" image="Kartik.jpeg"/>
            <MemberCard name="Varun Sharma" number="+91 6395696150" position="Advisor" image="Varun sharma.jpg"/>
            <MemberCard name="Aditya Raj" number="+91 8102061991" position="Advisor" image="Aditya.jpg"/>

          </div>
          
          <div className='grid grid-cols-2 lg:grid-cols-5 mx-auto gap-10'>
          <MemberCard name="Amitoj Singh" number="+91 9501261633" position="Representative" image="Amitoj.jpg"/>
         
          <MemberCard name="Mrinal Maurya" number="" position="Co-ordinator" image="Mrinal Maurya.JPG"/>
         <MemberCard name="Aryan Singh" number="" position="Co-ordinator" image="Aryan.jpg"/>
         <MemberCard name="Kanishq Sahu" number="" position="Co-ordinator" image="Kanishq Sahu.jpg"/>
         <MemberCard name="Kamran Mehdi" number="" position="Co-ordinator" image="Kamran.jpg"/>
               
                
            

          
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
            <MemberCard name="Sakshat Chahal" number="+91 9416305899" position="Mentor" image="Sakshat.jpg"/>
            <MemberCard name="Hardik Rana" number="+91 8053686858" position="Mentor" image="Hardik Rana.jpg"/>
            
          </div>
          
          <div className='grid grid-cols-2 mx-auto lg:grid-cols-4 gap-10'>
          <MemberCard name="Aditya Raj" number="+91 8102061991" position="Representative" image="Aditya.jpg"/>
          <MemberCard name="Aryan Yashvardhan" number="" position="Co-ordinator" image="Aaryan Y.jpg"/>
          <MemberCard name="Kartik Tiwari" number="" position="Co-ordinator" image="Kartik.jpeg"/>
           
          <MemberCard name="Varun Sharma" number="" position="Co-ordinator" image="Varun sharma.jpg"/>
          
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
          Inter-IIT Sports Quiz


          </h1>
          <p className='leading-10 text-[#ebecf3]'> 8th position in Inter-IIT Sports Quiz</p>
        </div>
        <div>
          <h1 className='text-2xl mt-5 font-bold mb-3 text-white'>
          IISER Mohali


          </h1>
          <p className='leading-10 text-[#ebecf3]'>4th position in two quizzing events at IISER Mohali</p>
        </div>
        <div>
          <h1 className='text-2xl mt-5 font-bold mb-3 text-white'>
          IIT Bhilai Exquisite 4.0

          </h1>
          <p className='leading-10 text-[#ebecf3]'>1st position in Exquisite 4.0</p>
        </div>
        <div>
          <h1 className='text-2xl mt-5 font-bold mb-3 text-white'>
          Zeitgeist

          </h1>
          <p className='leading-10 text-[#ebecf3]'>Third position in general quiz in Zeitgeist</p>
        </div>
       
      </div>
</div>
<footer>
      <div className="footer-container p-2 relative z-50 text-white">
      <h1 className='text-xl font-bold text-center my-auto'>Contact Us</h1>
        <div className="social-icons mx-auto flex gap-10 justify-center">
         
          <a href="https://www.instagram.com/enigma_iitropar/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className='text-white hover:text-[#c5eaf4]'/>
          </a>
          <a href="https://www.linkedin.com/in/enigma-iit-ropar-7a7a78254" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className='text-white hover:text-[#c5eaf4]'/>
          </a>
          <a href="mailto:enigma@iitrpr.ac.in" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={20} className='text-white hover:text-[#c5eaf4]'/>
          </a>
        </div>
      </div>
      
    </footer>
    </div>
  )
}



