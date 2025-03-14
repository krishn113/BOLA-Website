import React, { useState } from "react";
import eventsData from "../data/events.json";
import EventSmall from "../components/EventSmall";
import EventModal from "../components/EventModal";
import NavbarMalhar from "../components/NavbarMalhar";
import FooterMalhar from "../components/FooterMalhar";

const EventsMalhar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="bg-[#D0C2A5] overflow-hidden">
      {/* Hero Section */}
      <div
        className="absolute top-0 left-0 w-full h-[35vh] sm:h-[50vh] bg-cover bg-center flex justify-center items-center px-4"
        style={{ backgroundImage: "url('/Malhar/bg2.jpg')" }}
      >
        <h1 className="text-white text-3xl sm:text-5xl font-bold text-center">
          Events
        </h1>
      </div>

      <NavbarMalhar />

      {/* Events Grid */}
      <div className="container bg-transparent mx-auto px-4 sm:px-6 py-8 mt-[35vh] sm:mt-[50vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 mb-4">
          {eventsData.map((event) => (
            <EventSmall key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
      
      <FooterMalhar />
    </div>
  );
};

export default EventsMalhar;
