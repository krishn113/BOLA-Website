import React from 'react';
import Banner from "../components/Carousel";
import MessageFA from '../components/MessageFA';
import MessageGSBola from '../components/MessageGSBola';
import Mission from '../components/Mission';
import ClubList from '../components/ClubList';
import EventGallery from '../components/EventGallery';
import Footer from '../components/Footer';
import bg from "../ClubLogos/bg3.jpg"
import AboutUs from '../components/AboutUs';

export default function Home() {
  return (
    <div className='relative min-h-screen '>
      <div className="absolute inset-0 overflow-hidden">
      <img src={bg} className="object-cover w-full h-full fixed opacity-[80%]" alt="background"></img>
      <div className="bg-black opacity-60 absolute inset-0"></div>
      </div>
<Banner className="relative z-50"/>
<AboutUs className="relative z-50"/>
<MessageFA className="relative z-50"/>
<MessageGSBola className="relative z-50"/>
 <Mission className="relative z-50"/>
<ClubList className="relative z-50"/>
<EventGallery className="relative z-50"/>
 <Footer className="relative z-50"/>

    </div>
  )
}



