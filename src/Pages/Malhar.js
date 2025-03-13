import React from "react";
import { EventGallery } from "../components/EventCard"; // Adjust path if necessary
import FooterMalhar from "../components/FooterMalhar";

const Malhar = () => {
  return (
    <div className="bg-[#D0C2A5] min-h-screen">
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900">Malhar - Literary Fest</h1>
      </header>
      <EventGallery />
      <FooterMalhar/>
    </div>
  );
};

export default Malhar;
