import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white py-10"
      style={{ backgroundImage: "url('/Malhar/navbarbg.png')" }}
    >
      <div className="container mx-auto pt-0 text-center"> {/* Adjusted padding-top to bring links higher */}
        {/* Navigation Links */}
        <nav>
          <ul className="flex justify-center space-x-44"> {/* Increased space between links */}
            <li>
              <Link to="/" className="font-bold text-xl tracking-wide uppercase hover:text-gray-300 transition-colors">Home</Link> {/* Made text bolder and larger */}
            </li>
            <li>
              <Link to="/events" className="font-bold text-xl tracking-wide uppercase hover:text-gray-300 transition-colors">Events</Link>
            </li>
            <li>
              <Link to="/schedule" className="font-bold text-xl tracking-wide uppercase hover:text-gray-300 transition-colors">Schedule</Link>
            </li>
            <li>
              <Link to="/gallery" className="font-bold text-xl tracking-wide uppercase hover:text-gray-300 transition-colors">Gallery</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
