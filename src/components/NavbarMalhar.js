import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white py-6 pb-20"
      style={{ backgroundImage: "url('/Malhar/navbarbg.png')" }}
    >
      <div className="container mx-auto flex justify-center px-6">
        {/* Mobile Menu Button */}
        <button
          className="absolute left-6 text-white text-3xl sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden text-2xl justify-center sm:flex space-x-10 lg:space-x-20 font-bold">
          <Link to="/malhar" className="nav-link">Home</Link>
          <Link to="/malhar/events" className="nav-link">Events</Link>
          <Link to="/schedule" className="nav-link">Schedule</Link>
          <a
            href="https://drive.google.com/drive/folders/1Zv6G0MDj4y7SFgA13tL8YyPWZ-1Vi9FD"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Gallery
          </a>
        </nav>
      </div>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-slate-700 bg-opacity-95 flex flex-col justify-center items-center text-center space-y-6 text-xl z-50">
          <button
            className="absolute top-6 right-6 text-white font-bold text-4xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>
          <Link to="/malhar" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/malhar/events" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to="/schedule" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Schedule</Link>
          <a
            href="https://drive.google.com/drive/folders/1Zv6G0MDj4y7SFgA13tL8YyPWZ-1Vi9FD"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
