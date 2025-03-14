import React from "react";
import { EventGallery, EventsBar } from "../components/EventCard"; 
import FooterMalhar from "../components/FooterMalhar";
import NavbarMalhar from "../components/NavbarMalhar";

const Malhar = () => {
  return (
    
    <div className="bg-[#D0C2A5] min-h-screen">
      <NavbarMalhar/>
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900">Malhar - Literary Fest</h1>
      </header>
      <EventsBar />
      {/* About Fest Section */}
      <div className="container mx-auto px-4 py-16 ">
        <div className="max-w-4xl mx-auto">
          {/* About Fest Heading with brush stroke background */}
          <div className="relative inline-block mb-8">
            <div className="bg-black py-2 px-12 inline-block" style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}>
              <h2 className="text-white text-2xl font-bold relative z-10">ABOUT FEST</h2>
            </div>
          </div>
          
          {/* About Fest Content */}
          <p className="text-black text-lg leading-relaxed">
            Welcome to our vibrant and scintillating cultural fest. 
            Zeitgeist 24 is going to be an extravaganza where you 
            will get to experience different timelines festooned 
            with Music, Dance, Art, Literature, Food, and other 
            effervescent activities. This year's cultural fest 
            promises to be a festive and enriching experience, 
            featuring a range of cultural performances, food stalls, 
            and interactive activities. We welcome you to this 
            exhilarating journey through time.
          </p>
        </div>
      </div>
    
    {/* About Fest Section */}
    <div className="container mx-auto px-4 py-16 ">
        <div className="max-w-4xl mx-auto">
          {/* About Fest Heading with brush stroke background */}
          <div className="relative inline-block mb-8">
            <div className="bg-black py-2 px-12 inline-block" style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}>
              <h2 className="text-white text-2xl font-bold relative z-10">ABOUT THEME</h2>
            </div>
          </div>
          
          {/* About Fest Content */}
          <p className="text-black text-lg leading-relaxed">
            Welcome to our vibrant and scintillating cultural fest. 
            Zeitgeist 24 is going to be an extravaganza where you 
            will get to experience different timelines festooned 
            with Music, Dance, Art, Literature, Food, and other 
            effervescent activities. This year's cultural fest 
            promises to be a festive and enriching experience, 
            featuring a range of cultural performances, food stalls, 
            and interactive activities. We welcome you to this 
            exhilarating journey through time.
          </p>
        </div>
      </div>
    
    {/* Highlights Section */}
<div className="container mx-auto px-4 py-16 ">
  <div className="max-w-5xl mx-auto">
    {/* Highlights Header with brush stroke */}
    <div className="flex justify-center mb-8">
      <div className="relative">
        <div className="bg-black py-3 px-32" style={{ 
          clipPath: "polygon(0 0, 100% 0%, 98% 35%, 100% 60%, 97% 100%, 0% 100%, 2% 60%, 0% 35%)",
          border: "none" 
        }}>
          <h2 className="text-white text-3xl font-semibold text-center">Highlights</h2>
        </div>
      </div>
    </div>
    
    {/* Content - Two-column layout */}
    <div className="flex flex-col md:flex-row gap-8 items-center">
      {/* Left column - Text */}
      <div className="md:w-1/2">
        <p className="text-black text-lg leading-relaxed">
          Take a nostalgic journey through the best moments of Zeitgeist! Our past 
          fests have been filled with grand inaugurations, dynamic musical 
          performances, colorful cultural parades, and stunning art displays. Each photo 
          tells a story of joy, creativity, and togetherness that define our festival.
        </p>
        
        {/* Explore Gallery Button */}
        <div className="mt-6">
          <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-full hover:bg-gray-300 transition">
            Explore our gallery
          </button>
        </div>
      </div>
      
      {/* Right column - Image Collage */}
      <div className="md:w-1/2 grid grid-cols-2 gap-2">
        <img src="/gallery/performer1.jpg" alt="Festival performer" className="w-full h-40 object-cover" />
        <img src="/gallery/performer2.jpg" alt="Musical performance" className="w-full h-40 object-cover" />
        <img src="/gallery/performer3.jpg" alt="Cultural performance" className="w-full h-40 object-cover" />
        <img src="/gallery/performer4.jpg" alt="Art display" className="w-full h-40 object-cover" />
        <img src="/gallery/performer5.jpg" alt="Dance performance" className="w-full h-40 object-cover" />
        <img src="/gallery/performer6.jpg" alt="Festival moments" className="w-full h-40 object-cover" />
      </div>
    </div>
  </div>
</div>
      <FooterMalhar/>
    </div>
  );
};

export default Malhar;
