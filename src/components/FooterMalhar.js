import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import footerbg from "../Malhar/footerbg.png";

const FooterMalhar = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white py-10"
      style={{ backgroundImage: `url(${footerbg})` }}
    >
<div className="container mx-auto pt-32 text-center">
        {/* Malhar Logo */}
        <div className="flex justify-center mb-6">
          <img src="/path-to-logo.png" alt="Malhar Logo" className="w-48" />
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center space-x-8 mb-6">
          <a href="#" className="text-lg font-semibold hover:underline">
            HOME
          </a>
          <a href="#" className="text-lg font-semibold hover:underline">
            SCHEDULE
          </a>
          <a href="#" className="text-lg font-semibold hover:underline">
            EVENTS
          </a>
          <a href="#" className="text-lg font-semibold hover:underline">
            SPONSORS
          </a>
          <a href="#" className="text-lg font-semibold hover:underline">
            TEAM
          </a>
        </nav>
        

        <div className="flex flex-wrap justify-between items-center gap-8 text-lg mt-6">
          {/* Social Media Icons */}
          <div className="flex space-x-6 text-3xl">
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube />
            </a>
          </div>

          <div className="hidden md:block w-px h-8 bg-white"></div>

          {/* Location */}
          <div>
          <p className="text-2xl font-bold">Indian Institute of Technology Ropar</p>
            <p className="font-semibold">Location: Rupnagar, Punjab, India - 140001</p>
          </div>

          <div className="hidden md:block w-px h-8 bg-white"></div>

          {/* Email */}
          <div>
            <p className="font-semibold">Email: malhar@iitrpr.ac.in</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMalhar;
