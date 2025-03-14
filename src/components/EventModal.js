import React from "react";

const EventModal = ({ event, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-5"
      onClick={onClose}
    >
      <div
        className="relative p-6 rounded-lg flex flex-col bg-center bg-no-repeat w-[90vw] max-w-[800px] h-auto aspect-[4/3] overflow-auto"
        style={{
          backgroundImage: `url('/Malhar/eventbg.png')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-8 right-10 text-3xl font-bold text-[#4E342E] bg-black bg-opacity-50 px-2 rounded-full"
          onClick={onClose}
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row w-full flex-grow justify-between">
          <div className="flex flex-col justify-center w-full md:w-1/2 p-5">
            <h2 className="text-3xl font-bold text-[#4E342E]">{event.title}</h2>
            <p className="mt-2 text-lg text-[#6D4C41]">{event.description}</p>

            <p className="mt-4 text-lg font-semibold text-[#4E342E]">
              Registration Fee: <span className="text-[#A1887F]">{event.fee}</span>
            </p>

            <p className="mt-4 text-lg font-semibold text-[#4E342E]">
              Coordinator: <span className="text-[#A1887F]">{event.coordinator}</span>
            </p>

            <p className="text-lg font-semibold text-[#4E342E]">Contact: <span className="text-[#A1887F]">{event.contact}</span></p>
          </div>

          <div className="flex items-center justify-center w-full md:w-1/2 p-5">
            <img
              src={event.image}
              alt={event.title}
              className="w-80 h-80 object-cover rounded-md shadow-lg"
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <a
            href={event.rulebook}
            className="bg-black text-[#D7CCC8] w-44 text-center font-semibold text-lg px-6 py-3 relative overflow-hidden transition-all"
            style={{
              clipPath:
                "polygon(0 0, 100% 0%, 98% 35%, 100% 60%, 97% 100%, 0% 100%, 2% 60%, 0% 35%)",
              border: "none",
            }}
          >
            Rulebook
          </a>
          <a
            href={event.registerLink}
            className="bg-black text-[#D7CCC8] w-44 text-center font-semibold text-lg px-6 py-3 relative overflow-hidden transition-all"
            style={{
              clipPath:
                "polygon(0 0, 100% 0%, 98% 35%, 100% 60%, 97% 100%, 0% 100%, 2% 60%, 0% 35%)",
              border: "none",
            }}
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
