import React from 'react';
import DebSocLogo from '../ClubLogos/DebSoc.png';
import Carousel from 'react-multi-carousel';
import Reveal from '../components/Reveal';
import { useState } from "react";
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import MemberCard from '../components/MemberCard';
import bg from "../ClubLogos/bg3.jpg"
export default function DebSoc() {
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
       <div className="absolute inset-0 overflow-hidden">
      <img src={bg} className="object-cover w-full h-full fixed opacity-[80%]" alt="background"></img>
      <div className="bg-black opacity-70 absolute inset-0"></div>
      </div>
      
      <div className='relative pt-20 z-50 flex justify-center space-x-4'>
        <div className='text-center text-[#ebecf3] p-1  text-5xl font-bold'>
          DebSoc
        </div>
        <div><img loading="lazy" className='h-16 w-16  rounded-full p-2' alt="club-log" src={DebSocLogo}></img></div>
      </div>

      <div className='lg:flex space-x-5 '>
        <div className='lg:flex lg:flex-col  lg:w-full space-y-4'>
          <Reveal>
            <div className='lg:ml-20 mx-5'>
              <h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>About✨</h1>
              <p className='font-medium text-[#ebecf3] leading-10'>Welcome to DebSoc, where ideas ignite and perspectives collide! If you have a passion for persuasive discourse, critical thinking, and the art of verbal sparring, you've found your intellectual haven. Our club provides a platform for students to engage in captivating debates, hone their oratory skills, and expand their horizons through spirited discussions.. Our weekly debates, workshops, and practice sessions provide a platform to sharpen your rhetoric, develop logical arguments, and refine your persuasive skills.
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className='lg:ml-20 mx-5'>
                <h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>Vision✨</h1>
                <p className='font-medium leading-10 text-[#ebecf3]'>At DebSoc, we believe in the power of dialogue to shape opinions, challenge assumptions, and foster intellectual growth. Whether you're a seasoned debater or new to the world of competitive discourse, our club offers a welcoming environment that encourages learning, collaboration, and healthy competition.
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

          <div className=' '><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../Debsoc/2.png")}></img></div>
          <div className=' '><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../Debsoc/4.png")}></img></div>
          <div className=' '><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../Debsoc/6.png")}></img></div>
          <div className=' '><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../Debsoc/7.png")}></img></div>
          <div className=' '><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../Debsoc/5.png")}></img></div>


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
                <MemberCard name="Aditya Sahu" number="+91 7222999725" position="Secretary" image="Aditya_.jpg" />
                <MemberCard name="Aditya Vikram" number="+91 8445584665" position="Representative" image="Vikram.jpg" />

              </div>
              <div>
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-10'>
                  <MemberCard name="Darius Johanan" number="" position="Co-ordinator" image="Darius.jpg" />
                  <MemberCard name="Ananya Bansal" number="" position="Co-ordinator" image="Ananya Bansal.jpg" />

                  <MemberCard name="Ishaan Sharma" number="" position="Co-ordinator" image="Ishaan.jpg" />

                  <MemberCard name="Rhea Sanjay" number="" position="Co-ordinator" image="Rhea Sanjay.jpg" />
                  <MemberCard name="Shreyas Manak" number="" position="Co-ordinator" image="Shreyas.jpg" />









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
            <div className='mt-10 flex space-y-5 px-1 lg:px-20  flex-col'>
              <div className='grid grid-cols-2 lg:mx-auto gap-10'>
                <MemberCard name="Drishti Jain" number="+91 8437425181" position="Mentor" image="Drishti.jpg" />
                <MemberCard name="Niti Shyamsukha" number="+91 7760558275" position="Representative" image="Niti.PNG" />

              </div>
              <div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
                  <MemberCard name="Akshit Singh" number="" position="Co-ordinator" image="Akshit.jpg" />
                  <MemberCard name="Anurag Meena" number="" position="Co-ordinator" image="Anurag.jpg" />

                  <MemberCard name="Umang Raj" number="" position="Co-ordinator" image="Umang.jpg" />

                  <MemberCard name="Aditya Sahu" number="" position="Co-ordinator" image="Aditya_.jpg" />









                </div>
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
            NSMPD 2022


          </h1>
          <p className='leading-10 text-[#ebecf3]'>Novice winners of NSMPD 2022</p>
        </div>
        <div>
          <h1 className='text-2xl mt-5 font-bold mb-3 text-white'>
          Dr. D.R Singh Memorial Debate 2018


          </h1>
          <p className='leading-10 text-[#ebecf3]'>Runners up in Dr. D.R Singh Memorial Debate 2018
</p>
        </div>
          </div>
          
      </div>
      <footer>
        <div className="footer-container p-2 relative z-50 text-white">
          <h1 className='text-xl font-bold text-center my-auto'>Contact Us</h1>
          <div className="social-icons mx-auto flex gap-10 justify-center">

            <a href="https://www.instagram.com/debsoc_iitropar/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className='text-white hover:text-[#c5eaf4]' />
            </a>
            <a href="https://www.linkedin.com/company/debsociitrpr/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} className='text-white hover:text-[#c5eaf4]' />
            </a>
            <a href="mailto:debsoc@iitrpr.ac.in" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={20} className='text-white hover:text-[#c5eaf4]' />
            </a>
          </div>
        </div>

      </footer>
    </div>
  )
}



