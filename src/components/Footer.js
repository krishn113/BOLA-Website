import React from 'react';
import { FaEnvelope, FaInstagram, FaMapMarkedAlt, FaPhone, FaArrowRight} from 'react-icons/fa';
import Logo from "../ClubLogos/BOLA-1.png";
const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-400 w-full">
      
      <div className="container mx-auto lg:px-36 px-5  py-8">
        <div className="lg:flex justify-evenly">
        
          <div className="w-full ">
            <div className='flex '>
              <div>
                <img className="h-16 w-16 rounded-full"src={Logo} alt="bola logo"/>
              </div>
              <div>
              <h3 className="text-lg font-bold lg:ml-2 my-auto">Board Of Literary Affairs</h3>
              <p className="text-lg font-bold ml-2 my-auto">IIT Ropar</p>
              </div>
            
            </div>
            <div className='mt-6 ml-5'>
            <div className='flex gap-4 p-2'>
              <FaMapMarkedAlt size={20} />
            <p className="">
              Indian Institute of Technology Ropar <br />
              Rupnagar, Punjab - 140001, India
            </p>
            </div>
            <div className='flex gap-4 p-2'>
              <FaPhone size={20} />
            <p>Phone: +91 7500481739 </p>
            </div>
           <div className='flex gap-4 p-2'>
            <FaEnvelope size={20} />
           <p>Mail us at: gs.lit@iitrpr.ac.in</p>
           </div>
            <div className=''> 
              <a
                href="https://www.instagram.com/bola.iitrpr/"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition duration-300 ease-in-out "
              >
                <div className='flex gap-4 p-2'>
                <FaInstagram className="text-2xl" />
                <h1>Instagram</h1>
                </div>
                
                
              </a>
            
              
              </div>
            </div>
           
          </div>
         
          

<div className="lg:mx-0 mx-4 lg:px-32 lg:pt-0 pt-4">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <div className="flex flex-col  w-40  gap-2">
  <a
    href="https://www.iitrpr.ac.in/"
    className="text-gray-600  pr-4 hover:text-black transition duration-300 ease-in-out"
  >
    <div className='flex gap-2  '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className=" relative my-auto hover:ml-2 transition duration-300 ease-in-out"> Official Website</h1>
    </div>
    
  </a>
  <a
    href="https://www.iitrpr.ac.in/ismp/"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
    <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">ISMP</h1>
    </div>
  </a>
  <a
    href="https://www.iitrpr.ac.in/ug-section"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">UG Academics</h1>
    </div>
  </a>
  <a
    href="https://www.iitrpr.ac.in/pg-section"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">PG Academics</h1>
    </div>
  </a>
  <a
    href="https://www.iitrpr.ac.in/moodle/"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">Moodle</h1>
    </div>
  </a>
  <a
    href="https://alumni.iitrpr.ac.in/"
    className="text-gray-600 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2'>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">IRIAA</h1>
    </div>
  </a>
</div>
          </div>
          <div className="lg:mx-0 mx-4 lg:pt-0 pt-4">
            <h3 className="text-lg font-bold mb-2">Social Media Handles</h3>
            <div className="flex flex-col w-52 gap-2">
  <a
    href="https://www.instagram.com/alfaaz_iitrpr/?hl=en"
    className="text-gray-600  pr-4 hover:text-black transition duration-300 ease-in-out"
  >
    <div className='flex gap-2  '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className=" relative my-auto hover:ml-2 transition duration-300 ease-in-out"> Alfaaz</h1>
    </div>
    
  </a>
  <a
    href="https://instagram.com/alpha_productions_iitrpr?igshid=MzRlODBiNWFlZA=="
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
    <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">Alpha Productions</h1>
    </div>
  </a>
  <a
    href="https://www.instagram.com/debsoc_iitropar/?hl=en"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">DebSoc</h1>
    </div>
  </a>
  <a
    href="https://www.instagram.com/oratory_iitropar/?hl=en"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">Enarrators</h1>
    </div>
  </a>
  <a
    href="https://www.instagram.com/enigma_iitropar/?hl=en"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">Enigma</h1>
    </div>
  </a>
  <a
    href="https://www.instagram.com/filmski_iitropar/"
    className="text-gray-600 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2'>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">Filmski</h1>
    </div>

  </a>
  <a
    href="https://www.instagram.com/mun_iitrpr/?hl=en"
    className="text-gray-600 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2'>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">MUN</h1>
    </div>
    
  </a>
</div>
          </div>

          

      
        </div>
      </div>
      <div className='bg-[#232525] lg:py-8 lg:px-24 h-full w-full' >
        <div className='text-gray-400 w-full items-center lg:flex lg:justify-between'>
          <div className='lg:py-0 py-4 lg:mx-0 mx-12'>
          <h1 className='lg:text-sm text-xs'>Copyrights © 2022-23 Student Affairs IIT Ropar</h1>
          </div>
          <div className='lg:py-0 py-2 lg:mx-0 mx-14 flex justify-center space-x-5'>
          <h1 className='lg:text-sm text-xs'>Website Developed by</h1>
          <h1 className='text-[#c5eaf4] lg:text-sm text-xs'>Website development team </h1>
         </div>
         
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
