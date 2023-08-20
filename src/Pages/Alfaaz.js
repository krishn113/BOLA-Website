import React from 'react';
import AlfaazLogo from '../ClubLogos/Alfaaz.jpg';
import Carousel from 'react-multi-carousel';
import Reveal from '../components/Reveal';
import { useState } from "react";
import { motion } from 'framer-motion';
import MemberCard from '../components/MemberCard';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import bg from "../ClubLogos/bg3.jpg"
export default function Alfaaz() {
  const [selectedYear, setSelectedYear] = useState('2023-2024');

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
  return (
    <div className="relative min-h-screen text-black ">
      <div className="absolute inset-0 overflow-hidden">
      <img src={bg} className="object-cover w-full h-full fixed opacity-[80%]" alt="background"></img>
      <div className="bg-black opacity-70 absolute inset-0"></div>
      </div>
      
      <div className='relative pt-20 z-50 flex justify-center space-x-4'>
        <div className='text-center text-white p-1  text-5xl font-bold'>
          Alfaaz
        </div>
        <div><img loading="lazy" className='h-16 w-16  rounded-full p-2' alt="club-log" src={AlfaazLogo}></img></div>
      </div>

      <div className='lg:flex space-x-5 relative z-50'>
        <div className='lg:flex lg:flex-col  lg:w-full space-y-4'>
          <Reveal>
            <div className='lg:ml-20 mx-5'>
              <h1 className='text-4xl mt-10 text-white font-bold mb-6'>About✨</h1>
              <p className='font-medium z-50 text-white leading-10'>Alfaaz, the Poetry Club of IIT Ropar is a family of like-minded people when it comes to showing our love for reading and creative writing, and yet, who are also able to maintain their individualities apart by expressing the same thing through a ton of interesting perspectives. Got a penchant or even a slight inclination towards creative expression? Then Alfaaz is the club for you! We wholeheartedly welcome you to become a part of our family to learn and grow together in the art of words, transcending the boundaries of language and form.
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className='lg:ml-20 mx-5'>
                <h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>Vision✨</h1>
                <p className='font-medium leading-10 text-[#ebecf3]'>Celebrating literature and creativity, we are a community that shares common aspirations when it comes to creative writing, and encourages various forms of expression!
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

          <div className=' '><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../Alfaaz/5.jpg")}></img></div>
          <div className=' '><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover  border-white rounded-2xl p-2' alt="club-log" src={require("../Alfaaz/14.jpg")}></img></div>
          <div className=' '><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../Alfaaz/18.jpg")}></img></div>
          <div className=' '><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 object-cover border-white rounded-2xl p-2' alt="club-log" src={require("../Alfaaz/22.jpg")}></img></div>


        </Carousel></div>
      <hr className=" border-2 z-50 mx-5 border-gray-300 mt-10" />





      <div className='relative ml:mx-36 mx-5 z-50'>
        <div>
          <h1 className='text-5xl mt-10 text-center text-[#ebecf3] font-bold mb-6'>Core Team</h1>
        </div>

        <div className='flex justify-center gap-1 '>
          <button
            className={` text-black px-4 text-2xl font-bold  rounded-s-md ${selectedYear === '2023-2024' ? 'bg-[#c5eaf4]' : 'bg-white'}`}
            onClick={() => handleYearChange('2023-2024')}
          >
            2023-2024
          </button>
          <button
            className={` text-black px-4 text-2xl font-bold rounded-e-md ${selectedYear === '2022-2023' ? 'bg-[#c5eaf4]' : 'bg-white'}`}
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
                <MemberCard name="Sakshi Bhagdikar" number="+91 7587137726" position="Secretary" image="Sakshi Bhagdikar .jpg" />
                <MemberCard name="Prerna Singh" number="+91 9389605622" position="Representative" image="Prerna Singh.jpg" />



              </div>
             
                <div className='grid grid-cols-2 lg:grid-cols-3 mx-auto gap-10'>

                  <MemberCard name="Hitesh Patange" number="" position="Co-ordinator" image="Hitesh.jpg" />
                  <MemberCard name="Raj Shrivastav" number="" position="Co-ordinator" image="Raj.jpg" />
                  <MemberCard name="Amitoj Singh" number="" position="Co-ordinator" image="Amitoj.jpg" />
                  







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
                <MemberCard name="Aneeket Mangal" number="+91 9414563923" position="Mentor" image="Aneeket.jpg" />

                <MemberCard name="Jashandeep Singh" number="+91 9991338860" position="Mentor" image="Jashandeep Singh .jpg" />


              </div>

              <div className='grid grid-cols-2 lg:grid-cols-3 mx-auto gap-10'>


                <MemberCard name="Sakshi Bhagdikar" number="7587137726" position="Representative" image="Sakshi Bhagdikar .jpg" />
                <MemberCard name="Pratham R. Wadhwa" number="" position="Co-ordinator" image="Pratham.jpg" />
                <MemberCard name="Swaran Pratap Singh" number="" position="Co-ordinator" image="Swaran.jpg" />


              </div>

            </div>
          </motion.div>
        )}
      </div>

      <hr className=" border-2 mx-5 border-gray-300 mt-8" />
      <div className='relative z-10 lg:mx-36 mx-5'>
        <h1 className='text-4xl mt-10 font-bold mb-6 text-[#c5eaf4]'>Achievements🏆</h1>
        <div className='gird gird-cols-1 pb-10 '>
          <div>
            <h1 className='text-2xl mt-5 font-bold mb-3 text-white'>
              Aaveg, IIT Bhubaneswar

            </h1>
            <p className='leading-10 text-[#ebecf3]'>5 participants cleared the preliminary online round of Aaveg, the poetry competition in IIT Bhubaneshwar’s literary fest, LitSpree. Mr. Aneeket Mangal bagged the first prize in the finals.
            </p>
          </div>
          <div>
            <h1 className='text-2xl mt-5 font-bold mb-3 text-white'>
              Inter IIT Cult-cum- Lit- Meet


            </h1>
            <p className='leading-10 text-[#ebecf3]'>Alfaaz was represented in the Slam Poetry and creative story writing event. Tiya Jain and Sakshi Bhagdikar bagged the fourth position among participants from 23 IITs in the Hindi creative writing event.
            </p>
          </div>
          <div>
            <h1 className='text-2xl mt-5 font-bold mb-3 text-white'>
              Hindi Cell Poetry Event:

            </h1>
            <p className='leading-10 text-[#ebecf3]'>Alfaaz members, Ganesh Gurjar, Amit Kumar, and Shalini bagged the top three positions in the Poetry Recitation Competition organized by Hindi Cell, IIT Ropar.
            </p>
          </div>
          <div>
            <h1 className='text-2xl mt-5 font-bold mb-3 text-white'>
              Aavritti : Kavi Sammelan by the greatest contemporary poets

            </h1>
            <p className='leading-10 text-[#ebecf3]'>Graced by the finest poets of modern India, such as Aman Akshar, Azhar Iqbal, Khushbir Singh Shaad, Shashikant Yadav, Abhay Nirbheek and Aayushi Rakhecha, the event was a huge success, with the participation and appreciation of an audience of over 1000, comprising of almost all members of the IIT Ropar fraternity.

            </p>
          </div>
        </div>
      </div>
      <footer className='relative z-10'>
        <div className="footer-container p-2 bg-gray-40 text-white">
          <h1 className='text-xl font-bold text-center my-auto'>Contact Us</h1>
          <div className="social-icons mx-auto flex gap-10 justify-center">

            <a href="https://www.instagram.com/alfaaz_iitrpr/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className='text-bl text-white hover:text-[#c5eaf4] ' />
            </a>
            <a href="https://www.linkedin.com/in/alfaaz-poetry-club/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} className='text-bl text-white hover:text-[#c5eaf4] ' />
            </a>
            <a href="mailto:alfaaz@iitrpr.ac.in" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={20} className='text-bl text-white hover:text-[#c5eaf4] ' />
            </a>
          </div>
        </div>

      </footer>

    </div>
  )
}



