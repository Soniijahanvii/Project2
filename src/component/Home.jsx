import React from "react";
import HomePageImage from "../assets/HomePage.png";

const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center mt-10">
        <div>
          <div className="text-xl font-bold">
            <h1 className="text-5xl ml-16 font-bold">
              Grow your audience on social and beyond
            </h1>
          </div>
          <div>
            <h4 className="text-xl ml-16 mr-6 font-md mt-16">
              Buffer helps you build an audience organically. We’re a
              values-driven company that provides affordable, intuitive
              marketing tools for ambitious people and teams.
            </h4>
          </div>
          <div className="flex justify-center gap-16 mt-16 ">
            <div>
              <input
                type="text"
                placeholder="Enter your text here..."
                className="w-80 h-16 text-xl gap-16 max-w-md px-4 py-3 text-gray-700 border border-black rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300"
              />
            </div>

            <div>
              <button
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:translate-y-[-2px] active:bg-blue-800 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 w-80 h-16 text-2xl"
                type="submit"
              >
                Get started now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <img
          src={HomePageImage}
          alt="Left Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
