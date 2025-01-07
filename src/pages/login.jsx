import React from "react";
import backgroundImage from "../assets/image4.png";
import sideImage from "../assets/image.png";

const Login = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="flex w-4/5 max-w-6xl bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl ">
          <div className="w-1/2 ">
            <img
              src={sideImage}
              alt="Left Illustration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side with Login Form */}
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl text-white font-bold mb-6 text-center">
              Hello Welcome back !!
            </h2>
            <form>
              <div className="mb-4 text-center">
                <label
                  htmlFor="email"
                  className="block text-white font-medium text-lg text-start ml-12"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-96 h-10 mr-8 mt-2 p-2   border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6 text-center">
                <label
                  htmlFor="password"
                  className="block text-white font-medium text-lg text-start ml-12"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-96 h-10 mt-2 mr-8 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-center mr-8">
                <button
                  type="submit"
                  className="w-96  text-lg mt-5 bg-[#3091e0] text-white py-2 px-4 rounded-full hover:bg-[#5042ce] transition-all"
                >
                  Login
                </button>
              </div>
              <div className="flex items-center my-6">
                <div className="flex-grow border-t ml-14 border-gray-300"></div>
                <span className="mx-4 text-gray-400">Or</span>
                <div className="flex-grow border-t mr-20 border-gray-300"></div>
              </div>
              <div className="flex justify-between ml-20 mr-20">
                <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full  transition-all ml-20 mt-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_2015_logo.svg"
                    alt="Google Icon"
                    className="w-6 h-6"
                  />
                </button>
                <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full  transition-all mr-24 mt-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="Apple Icon"
                    className="w-6 h-7"
                  />
                </button>
              </div>
              <div className="text-center mt-5 text-white text-lg">
                Don't have an account?{" "}
                <a href="/sign-up" className="text-blue-500 hover:underline">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
