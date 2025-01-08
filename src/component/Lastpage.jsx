import React from "react";
import Image from "../assets/Back.png";

const Lastpage = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center px-4 py-10 "
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          140,000+ people like you use Buffer to build their brand on social
          media every month
        </h1>
        <div className="mt-10">
          <button
            className="bg-[#E5576C] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#d6314a] hover:translate-y-[-2px] active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300 w-full sm:w-auto h-14 sm:h-16 text-lg sm:text-2xl"
            type="submit"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lastpage;
