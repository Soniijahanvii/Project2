import React from "react";
import HomePageImage from "../assets/HomePage.png";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:px-12 ">
      <div className="flex flex-col justify-center lg:items-start mt-10 lg:mt-0">
        <div>
          <div className="text-center lg:text-left text-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Grow your audience on social and beyond
            </h1>
          </div>
          <div className="mt-8 text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-medium text-gray-700">
              Buffer helps you build an audience organically. We’re a
              values-driven company that provides affordable, intuitive
              marketing tools for ambitious people and teams.
            </h4>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-10 w-full">
            <div>
              <input
                type="text"
                placeholder="Enter your text here..."
                className="w-full sm:w-auto sm:flex-grow h-12 sm:h-14 text-lg px-4 py-2 border border-black rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              />
            </div>

            <div>
              <button
                className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:translate-y-[-2px] active:bg-blue-800 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 text-lg sm:text-xl"
                type="submit"
              >
                Get started now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10  w-full h-full ml-10  mr-2  flex justify-center">
        <img
          src={HomePageImage}
          alt="Left Illustration"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default Home;
