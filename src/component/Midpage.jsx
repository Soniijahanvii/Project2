import React from "react";
import SideImage from "../assets/sideimage2.png";

const Midpage = () => {
  return (
    <>
      <div className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mt-12 sm:mt-16 md:mt-28 px-4 ">
        <h1>Build a following without draining your time</h1>
      </div>

      <div className="text-lg sm:text-xl md:text-2xl text-center mt-6 sm:mt-8 md:mt-10 px-4 sm:px-16 lg:px-96 ">
        <p>
          Creating content is hard enough. Let alone distributing it to all the
          different marketing channels. Here are four ways Buffer can help.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center mt-10 lg:mt-16 px-4 gap-10 ">
        <div className="w-full lg:w-1/2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-left text-center text-blue-700 font-semibold">
            1. Create Click-Worthy Content
          </h1>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:mt-6 mt-4 font-bold lg:text-left text-center">
            Build a library of content ideas
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mt-6 text-center lg:text-left">
            Buffer will help you turn your ideas into captivating posts for each
            platform.
          </p>

          <div className="flex justify-center lg:justify-start mt-8">
            <button
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:translate-y-[-2px] active:bg-blue-800 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 w-48 sm:w-60 h-14 sm:h-16 text-lg sm:text-2xl"
              type="submit"
            >
              Start Creating
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={SideImage}
            alt="Illustration"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Midpage;
