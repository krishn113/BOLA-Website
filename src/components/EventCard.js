import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const EventCard = ({ title, description, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gray-800 text-white shadow-lg rounded-2xl overflow-hidden w-72 h-96 flex flex-col justify-end p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-black bg-opacity-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition">
          More Details <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

const events = [
  { title: "Poetry Slam", description: "Express your emotions through poetry.", image: "path/to/image1.jpg" },
  { title: "Short Story Contest", description: "Unleash your creativity in short fiction.", image: "path/to/image2.jpg" },
  { title: "Debate Championship", description: "Showcase your argument skills.", image: "path/to/image3.jpg" },
  { title: "Open Mic", description: "Share your words, thoughts, and melodies.", image: "path/to/image4.jpg" },
];

const EventGallery = () => {
  return (
    <div className="container mx-auto py-12 px-6 overflow-x-auto flex gap-6 scrollbar-hide">
      {events.map((event, index) => (
        <EventCard key={index} title={event.title} description={event.description} image={event.image} />
      ))}
    </div>
  );
};

export { EventCard, EventGallery };
