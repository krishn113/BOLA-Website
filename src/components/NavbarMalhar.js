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
              <Link to="/malhar" className="font-bold text-xl tracking-wide uppercase hover:text-gray-300 transition-colors">Home</Link> {/* Made text bolder and larger */}
            </li>
            <li>
              <Link to="/malhar/events" className="font-bold text-xl tracking-wide uppercase hover:text-gray-300 transition-colors">Events</Link>
            </li>
            <li>
              <Link to="/schedule" className="font-bold text-xl tracking-wide uppercase hover:text-gray-300 transition-colors">Schedule</Link>
            </li>
            <li>
  <a 
    href="https://drive.google.com/drive/folders/1Zv6G0MDj4y7SFgA13tL8YyPWZ-1Vi9FD" 
    target="_blank" 
    rel="noopener noreferrer"
    className="font-bold text-xl tracking-wide uppercase hover:text-gray-300 transition-colors"
  >
    Gallery
  </a>
</li>

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
