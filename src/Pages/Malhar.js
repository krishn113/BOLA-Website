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
      <FooterMalhar/>
    </div>
  );
};

export default Malhar;
