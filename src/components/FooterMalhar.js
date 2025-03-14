import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const FooterMalhar = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white py-10"
      style={{ backgroundImage: "url('/Malhar/footerbg.png')" }}
    >
      <div className="container mx-auto pt-16 text-center px-6">
        {/* Malhar Logo */}
        <div className="flex justify-center mb-6">
          <img src="/Malhar/log.png" alt="Malhar Logo" className="w-36 md:w-48" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 md:space-x-8 mb-6 text-sm md:text-lg font-semibold">
          <a href="#" className="hover:underline">HOME</a>
          <a href="#" className="hover:underline">SCHEDULE</a>
          <a href="#" className="hover:underline">EVENTS</a>
          <a href="#" className="hover:underline">SPONSORS</a>
          <a href="#" className="hover:underline">TEAM</a>
        </nav>


        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-8 text-sm md:text-lg mt-6">
          {/* Social Media Icons */}
          <div className="flex space-x-4 md:space-x-6 text-2xl md:text-3xl">
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
          </div>

          <div className="hidden md:block w-px h-8 bg-white"></div>

          {/* Location */}
          <div className="text-center md:text-left">
            <p className="text-lg md:text-2xl font-bold">Indian Institute of Technology Ropar</p>
            <p className="font-semibold">Location: Rupnagar, Punjab, India - 140001</p>
          </div>

          <div className="hidden md:block w-px h-8 bg-white"></div>

          {/* Email */}
          <div className="text-center md:text-left">
            <p className="font-semibold">Email: malhar@iitrpr.ac.in</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMalhar;
