import React, { useState } from "react";
import eventsData from "../data/events.json";
import EventSmall from "../components/EventSmall";
import EventModal from "../components/EventModal";
import NavbarMalhar from "../components/NavbarMalhar";

const EventsMalhar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#D0C2A5]">
      <div
        className="absolute top-0 left-0 w-full h-[40vh] sm:h-[50vh] bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/Malhar/bg2.jpg')" }}
      >
        <h1 className="text-white text-5xl font-bold">Events</h1>
      </div>

      <NavbarMalhar />

      <div className="container bg-transparent mx-auto px-6 py-8 mt-[40vh] sm:mt-[50vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {eventsData.map((event) => (
            <EventSmall key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default EventsMalhar;
