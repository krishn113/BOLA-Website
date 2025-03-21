import React from "react";
import { motion } from "framer-motion";  // Import motion from Framer Motion
import { EventsBar } from "../components/EventCard";
import FooterMalhar from "../components/FooterMalhar";
import NavbarMalhar from "../components/NavbarMalhar";

const Malhar = () => {
  return (
    <div className="relative min-h-screen bg-[#D0C2A5]">
      {/* Background Image with fade-in effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full sm:h-[100vh] bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/Malhar/backe.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="flex flex-col justify-center items-center w-full text-center">
          {/* Logo with fade-in effect */}
          <motion.img
            src="/Malhar/log.png"
            alt="Malhar Logo"
            className="w-40 mb-4 mt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />

          {/* Header Image with slide-up effect */}
          <motion.img
            src="/Malhar/head.png"
            alt="Malhar Header"
            className="max-w-xs md:max-w-md lg:max-w-lg -mt-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          />

          {/* Dates Section with typewriting effect */}
          <motion.div
            className="mt-8 text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl -mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 3, ease: "ease-in-out" }}
              style={{ display: "inline-block", overflow: "hidden" }}
            >
              12 - 14 April
            </motion.span>
          </motion.div>
        </div>
      </motion.div>

      {/* Navbar with fade-in effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <NavbarMalhar />
      </motion.div>

      <div className="container mx-auto px-4" style={{ marginTop: '700px' }}>
        <EventsBar />
      </div>

      {/* About Fest Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative inline-block mb-8">
            <div className="bg-black py-2 px-12 inline-block" style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}>
              <h2 className="text-white text-2xl font-bold relative z-10">ABOUT FEST</h2>
            </div>
          </div>
          
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

      {/* About Theme Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative inline-block mb-8">
            <div className="bg-black py-2 px-12 inline-block" style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}>
              <h2 className="text-white text-2xl font-bold relative z-10">ABOUT THEME</h2>
            </div>
          </div>

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

      {/* Highlights Section with fade-in for images */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-black py-3 px-32" style={{ clipPath: "polygon(0 0, 100% 0%, 98% 35%, 100% 60%, 97% 100%, 0% 100%, 2% 60%, 0% 35%)" }}>
                <h2 className="text-white text-3xl font-semibold text-center">Highlights</h2>
              </div>
            </div>
          </div>

          {/* Content - Two-column layout */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <p className="text-black text-lg leading-relaxed">
                Take a nostalgic journey through the best moments of Zeitgeist! Our past 
                fests have been filled with grand inaugurations, dynamic musical 
                performances, colorful cultural parades, and stunning art displays. Each photo 
                tells a story of joy, creativity, and togetherness that define our festival.
              </p>
              <div className="mt-6">
                <button
                  className="bg-gray-200 text-gray-700 py-2 px-6 rounded-full hover:bg-gray-300 transition"
                  onClick={() => window.open("https://drive.google.com/drive/folders/1Zv6G0MDj4y7SFgA13tL8YyPWZ-1Vi9FD", "_blank")}
                >
                  Explore our gallery
                </button>
              </div>
            </motion.div>

            {/* Right column - Image Collage with fade-in */}
            <motion.div
              className="md:w-1/2 grid grid-cols-2 gap-2 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
            >
              <img src="/Malhar/highlights1.jpg" alt="Festival performer" className="w-full h-40 object-cover rounded-lg shadow-md" />
              <img src="/Malhar/highlights2.jpg" alt="Festival performer" className="w-full h-40 object-cover rounded-lg shadow-md" />

              <img src="/Malhar/highlights3.jpg" alt="Festival performer" className="w-full h-40 object-cover rounded-lg shadow-md translate-x-1/2" />
              <img src="/Malhar/highlights4.jpg" alt="Festival performer" className="w-full h-40 object-cover rounded-lg shadow-md translate-x-1/2" />

              <img src="/Malhar/highlights5.jpg" alt="Festival performer" className="w-full h-40 object-cover rounded-lg shadow-md" />
              <img src="/Malhar/highlights6.jpg" alt="Festival performer" className="w-full h-40 object-cover rounded-lg shadow-md" />
            </motion.div>
          </div>
        </div>
      </div>

      <FooterMalhar />
    </div>
  );
};

export default Malhar;
