import React from "react";
import SideImage from "../assets/sideimage2.png";

const Midpage = () => {
  return (
    <>
      <div className="text-4xl text-center font-bold mt-28">
        <h1>Build a following without draining your time</h1>
      </div>
      <div className="text-2xl text-center  ml-96 mr-96 mt-10">
        <p>
          Creating content is hard enough. Let alone distributing it to all the
          different marketing channels. Here are four ways Buffer can help.
        </p>
      </div>
      <div className="flex mt-10">
        <div className="mt-60 w-full">
          <h1 className="text-3xl text-left ml-16  text-blue-700 font-semibold">
            1. Create Click-Worthy Content
          </h1>
          <div>
            <h1 className="text-5xl ml-16 mt-10 font-bold">
              Build a library of content ideas
            </h1>
          </div>
          <p className="text-2xl ml-16 font-md mt-10">
            Buffer will help you turn your ideas into captivating posts for each
            platform.
          </p>
          <div>
            <button
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:translate-y-[-2px] active:bg-blue-800 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 w-60 h-16 text-2xl ml-16 mt-10"
              type="submit"
            >
              Start Creating
            </button>
          </div>
        </div>
        <div className="w-full">
          <img
            src={SideImage}
            alt="Left Illustration"
            className="w-full h-full object-cover mt-10"
          />
        </div>
      </div>
    </>
  );
};

export default Midpage;
