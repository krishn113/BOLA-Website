import React from 'react';
import Reveal from './Reveal';

export default function MessageFA() {
  return (
            <Reveal>  
               <div className=' pt-36 lg:px-48 px-5'>
            <h1 className='text-4xl text-[#c5eaf4]  font-bold mb-6'>Message from Faculty Advisor</h1>
            
            <hr className="w-full border-2 border-gray-300 mt-8" />
            <div className='lg:flex flex-row justify-between  space-x-5'>
            <div>
            <img loading="lazy"  className=" rounded-full mx-auto lg:w-80 lg:h-80 w-60 h-60 object-cover  mt-8" alt="FA"src="FA.jpg"></img>
              <h4 className='text-lg mt-3 text-center mx-auto text-[#ebecf3]'>Dr. Aparna Nandha</h4>
            </div>
            
              <div className='mt-8 h-1/2 lg:w-[70%] lg:text-xl text-sm pt-5 pl-16 text-[#ebecf3] pr-4 font-semibold text-justify  leading-10'>
              The Board of Literary Affairs (BOLA), IIT Ropar, provides a platform for our students to hone their literary skills and prepares the future generation to be confident communicators. It has been my privilege to work with our very talented and enthusiastic students in the capacity of FA (BOLA) since 2021. As a team, we have striven to cultivate in our students excellent spoken and written skills. We aim to build a culture of healthy debates, conversations on diverse topics and groom our students into holistic and socially responsible individuals. Our objective is to capacitate our students to be ethical, value-driven, and efficient communicators through an array of exercises and activities. We believe that with this exposure and training, our students will acquire the necessary skills to live a good life and become the leaders of a better tomorrow.

            </div>
           
            </div>
            
          </div>

            </Reveal>
          
  
   
  );
}
