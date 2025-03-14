import React from "react";

const EventSmall = ({ event, onClick }) => {
  return (
    <div
      className="bg-orange-100 border-4 border-orange-950 rounded-xl p-5 text-center w-72 h-96 
                 flex flex-col justify-between shadow-lg cursor-pointer transition-transform 
                 transform hover:scale-105 hover:shadow-xl"
      onClick={onClick}
    >
      <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>

      <div className="flex-grow flex items-center justify-center">
        <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg my-4" />
      </div>

      <button
        className="bg-black text-white font-semibold text-lg px-6 py-3 mt-2 relative overflow-hidden transition-all"
        style={{
          clipPath:
            "polygon(0 0, 100% 0%, 98% 35%, 100% 60%, 97% 100%, 0% 100%, 2% 60%, 0% 35%)",
          border: "none",
        }}
      >
        Explore More
      </button>
    </div>
  );
};

export default EventSmall;

