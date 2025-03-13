import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const EventCard = ({ title, description, image }) => {
  return (
    <div
      className="relative bg-yellow-950 text-white shadow-lg rounded-2xl overflow-hidden w-80 sm:w-96 h-80 sm:h-96 flex-none justify-end p-6 bg-cover bg-center snap-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-black bg-opacity-50 p-4 rounded-lg">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition">
          More Details <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

const events = [
  { title: "Poetry Slam", description: "Express your emotions through poetry.", image: "/Malhar/image1.jpg" },
  { title: "Short Story Contest", description: "Unleash your creativity in short fiction.", image: "path/to/image2.jpg" },
  { title: "Debate Championship", description: "Showcase your argument skills.", image: "/Malhar/image.png" },
  { title: "Open Mic", description: "Share your words, thoughts, and melodies.", image: "path/to/image4.jpg" },
  { title: "Poetry Slam", description: "Express your emotions through poetry.", image: "/Malhar/image1.jpg" },
  { title: "Short Story Contest", description: "Unleash your creativity in short fiction.", image: "path/to/image2.jpg" },
  { title: "Debate Championship", description: "Showcase your argument skills.", image: "/Malhar/image.png" },
  { title: "Open Mic", description: "Share your words, thoughts, and melodies.", image: "path/to/image4.jpg" },
];

const EventsBar = () => {
  return (
    <div className="w-full flex flex-col items-center py-5">
      {/* Title Centered */}
      <h1 className="text-4xl text-white font-bold mb-6 text-center">Events</h1>

      {/* Horizontal Scroll Section with Padding Fix */}
      <div className="relative w-full px-6">
        <div className="flex gap-x-6 overflow-x-auto scrollbar-hide whitespace-nowrap snap-x snap-mandatory no-scrollbar pb-5 scroll-ml-6 justify-start">
          {events.map((event, index) => (
            <EventCard key={index} title={event.title} description={event.description} image={event.image} />
          ))}
        </div>
      </div>

      {/* View All Button Centered */}
      <div className="flex justify-end w-full px-6">
      <Link 
        to="/event-gallery" 
        className="p-3 bg-white text-center rounded-xl text-black font-bold text-lg sm:text-xl hover:scale-105 hover:bg-[#c5eaf4] transition"
      >
        View All
      </Link>
</div>
    </div>
  );
};

export { EventCard, EventsBar };
