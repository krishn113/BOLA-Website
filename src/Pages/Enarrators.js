import React from 'react';
import EnnaratorsLogo from '../ClubLogos/Enarrators.PNG';
import Carousel from 'react-multi-carousel';
import Reveal from '../components/Reveal';
import { useState } from "react";
import { motion } from 'framer-motion';
import MemberCard from '../components/MemberCard';
import bg from "../ClubLogos/bg3.jpg"
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
export default function Ennarators() {
  const [selectedYear, setSelectedYear] = useState('2023-2024');

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
  return (
    <div className='relative min-h-screen text-black'>
       <div className="absolute inset-0 overflow-hidden">
      <img src={bg} className="object-cover w-full h-full fixed opacity-[80%]" alt="background"></img>
      <div className="bg-black opacity-70 absolute inset-0"></div>
      </div>
      <div className='relative pt-20 z-50 flex justify-center space-x-4'>
      <div className='text-center text-[#ebecf3] p-1  text-5xl font-bold'>
      Enarrators
    </div>
    <div><img loading="lazy"  className='h-16 w-16  rounded-full p-2' alt="club-log" src={EnnaratorsLogo}></img></div>
      </div>
    
    <div className='lg:flex space-x-5 '>
    <div className='lg:flex lg:flex-col  lg:w-full space-y-4'>
      <Reveal>
      <div className='lg:ml-20 mx-5'>
<h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>About✨</h1>
<p className='font-medium text-[#ebecf3] leading-10'>Enarrators, the Oratory Club of IIT Ropar, is a dynamic student community dedicated to fostering public speaking and communication skills among its members. Enarrators objective is to establish a platform that allows students to boldly and successfully express themselves via the art of oratory.

The oratory club provides a supportive environment that helps you master the art of persuasion with powerful questioning techniques that ignite curiosity, engage audiences, drive impactful discussions, and can transform an ordinary speech into an extraordinary experience.
</p>
</div>
      </Reveal>

<div>
  <Reveal>
  <div className='lg:ml-20 mx-5'>
<h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>Vision✨</h1>
<p className='font-medium leading-10 text-[#ebecf3]'>The goal of the Oratory Club is to establish a vibrant, welcoming environment that encourages students to develop into effective communicators who can have a beneficial influence on society. We work to create a community where people may investigate other viewpoints, express themselves honestly, and develop the critical abilities needed for both personal and professional success.
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

<div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../Enarrators/2.jpg")}></img></div>
    <div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log"src={require("../Enarrators/7.jpg")}></img></div>
    <div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log"src={require("../Enarrators/3.jpg")}></img></div>
    <div className=' '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log"src={require("../Enarrators/12.jpg")}></img></div>
   
    
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
            <MemberCard name="Maneesh Aggarwal" number="+91 9855630374" position="Secretary" image="Maneesh.jpg"/>
            <MemberCard name="Kanishq Sahu" number="+91 9009730530" position="Representative" image="Kanishq Sahu.jpg"/>

          </div>
         
          <div className='grid grid-cols-2 lg:grid-cols-4 mx-auto gap-10'>
          <MemberCard name="Kashish Yadav" number="+91 77378 26754" position="Co-ordinator" image="Kashish.jpg"/>
         
          <MemberCard name="Kultaj Singh" number="+91 75280 61907" position="Co-ordinator" image="Kultaj Singh.jpg"/>
          <MemberCard name="Prachi Chhabra" number="+91 94651 87650" position="Co-ordinator" image="Prachi.jpg"/>
             
          <MemberCard name="Mrinal Maurya" number="+91 84093 44447" position="Co-ordinator" image="Mrinal Maurya.JPG"/>
             
          
        

                

               
                
            

          
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
            <div className='grid grid-cols-2 mx-auto lg:mx-auto gap-10'>
           
            <MemberCard name="Charukant Rao" number="+91 8837875359" position="Representative" image="Charukant.jpg"/>
            <MemberCard name="Aryan Agarwal" number="+91 9887321353" position="Mentor" image="Aryan .jpg"/>
          </div>
         
          <div className='grid grid-cols-2 lg:grid-cols-4 mx-auto lg:mx-auto gap-10'>
          <MemberCard name="Maneesh Aggarwal" number="" position="Co-ordinator" image="Maneesh.jpg"/>
          <MemberCard name="Manan Dangwal" number="" position="Co-ordinator" image="Manan.jpg"/>
          <MemberCard name="Nikhil Rastogi" number="" position="Co-ordinator" image="Nikhil Rastogi.jpg"/>
          <MemberCard name="Vivek Chadgal" number="" position="Co-ordinator" image="Vivek.jpg"/>
        
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
          Bidvertise


          </h1>
          <p className='leading-10 text-[#ebecf3]'>Bidvertise, a remarkable event organised by the Enarrators Club during Zeitgeist 2023. This event witnessed the unveiling of extraordinary equipments, diligently transported from the realms of the future, which were meticulously auctioned off and artfully presented to our esteemed panel, graced by the presence of Aparna Ma'am [Professor, English (HSS Dept.)] and Bhavesh Sir[Professor, Economics (HSS Dept.)]. With over 25 teams participating, The winners of the event were:
1st position -   Aniket Arya, Amlan Anshu,  Siddharth Girdhar
2nd position -  Kanha Singhania, Satanshu Pathak
3rd position -   Raj Shrivastava

</p>
        </div>
        <div>
          <h1 className='text-2xl mt-5 font-bold mb-3 text-white'>
          Literary event under Azadi ka Amrit Mahotsav 2.0.


          </h1>
          <p className='leading-10 text-[#ebecf3]'>Members of the Enarrators Club: Kanishq Sahu, Kartik Tiwari, Prachi Chhabra, Prerna Singh, Unnati Singh and Safdar Naveed Amini secured first place. 


</p>
        </div>
        <div>
          <h1 className='text-2xl mt-5 font-bold mb-3 text-white'>
          Declamation contest on tribal day 


          </h1>
          <p className='leading-10 text-[#ebecf3]'>Enarrators member: Mrs. Nekha Fatima secured the first position, with Amitoj Singh grabbing the second Position

</p>
        </div>
      </div>
</div>
<footer>
      <div className="footer-container p-2 relative z-50 text-white">
      <h1 className='text-xl font-bold text-center my-auto'>Contact Us</h1>
        <div className="social-icons mx-auto flex gap-10 justify-center">
         
          <a href="https://www.instagram.com/oratory_iitropar/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className='text-white hover:text-[#c5eaf4]'/>
          </a>
          <a href="https://www.linkedin.com/company/the-oratory-club-iit-ropar/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className='text-white hover:text-[#c5eaf4]'/>
          </a>
          <a href="mailto:enarrators@iitrpr.ac.in" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={20} className='text-white hover:text-[#c5eaf4]'/>
          </a>
        </div>
      </div>
      
    </footer>
    </div>
  )
}



