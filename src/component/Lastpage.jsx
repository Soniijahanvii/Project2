import React from "react";
import Image from "../assets/Back.png";

const Lastpage = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center mt-20"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <div>
        <h1 className="text-5xl ml-10 mr-20  mt-60 font-bold text-center text-white">
          140,000+ people like you use Buffer to build their brand on social
          media every month
        </h1>
        <div className="text-center">
          <button
            className="bg-[#E5576C] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#d6314a] hover:translate-y-[-2px] active:bg-blue-800 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 w-60 h-20 text-2xl ml-16 mt-20 text-center mb-28"
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
