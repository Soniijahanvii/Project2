import React, { useState } from "react";
import Image from "../assets/sup2.png";
import SideImage from "../assets/sideimage.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!formData.email || !formData.name || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Sign-up successful!", formData);
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-black"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <div className="flex w-4/5 max-w-6xl gap-16 bg-white/10 backdrop-blur-lg rounded-tl-[200px] rounded-2xl overflow-hidden shadow-2xl ">
        <div className="w-1/2 ">
          <img
            src={SideImage}
            alt="Left Illustration"
            className="w-full h-full object-cover rounded-tl-[200px]"
          />
        </div>
        <div className="bg-transparent mb-4 p-8 rounded-full shadow-md  max-w-md w-1/2  flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Let's get your account set up
          </h2>
          {error && (
            <p className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-center mr-72 ml-4 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-80 ml-9 h-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm text-center mr-72 ml-4  font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-80 ml-9 h-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm text-center mr-64  font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-80 ml-9 h-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm text-center mr-48  font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 p-2 w-80 ml-9 h-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-80 ml-9 h-10 bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-4 text-gray-600">Or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="flex p-2  gap-14 justify-center">
              <button className="w-20  h-10 p-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300">
                Facebook
              </button>
              <button className="w-20  h-10 p-1 bg-blue-600  text-white py-3 rounded-md hover:bg-blue-500 transition duration-300">
                Twitter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
