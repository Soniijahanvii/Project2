import React from "react";
import Navbar from "./Navbar";
import Blogimage from "../assets/blog.png";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import Blog4 from "../assets/blog4.png";
import Blog5 from "../assets/blog5.png";
import Blog6 from "../assets/blog6.png";
import Footer from "./Footer";

const Blog = () => {
  return (
    <>
      <div className="fixed gap-10 w-full z-50 bg-white">
        <Navbar />
      </div>
      <div className="mt-40 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-4">
        <div className="mt-10 w-full lg:w-1/2 flex justify-center">
          <img
            src={Blogimage}
            alt="Left Illustration"
            className="max-w-full h-auto object-cover"
          />
        </div>

        <div className="mt-20 lg:mt-0 lg:mr-20 lg:w-1/2">
          <div className="text-center lg:text-left text-xl mt-0 sm:mt-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              How to Run Ads on TikTok: A Step-by-Step Guide to TikTok
              Advertising
            </h1>
            <p className="mt-8 sm:mt-12 lg:mt-16">
              This article takes you through everything you need to know to run
              TikTok ads and implement a solid advertising strategy.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 lg:gap-24 mt-8">
              <p className="text-sm">Jan 9, 2025</p>
              <p className="text-sm">16 min read</p>
              <p className="text-sm">TikTok</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 sm:ml-10 sm:mr-10">
        <h1 className="text-xl font-bold text-center">Latest Updates</h1>
        <div className="flex-grow border-t border-gray-400 mx-10 lg:mx-44"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-5 sm:px-16 lg:px-0">
          <div className="border shadow-xl">
            <div className="p-5">
              <img
                src={Blog1}
                alt="Left Illustration"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <p className="text-lg text-blue-500 mt-4">
                  Social Media Marketing
                </p>
                <p className="text-sm mt-4">Jan 8, 2025</p>
              </div>
              <div className="mt-2">
                <h1 className="text-2xl font-bold underline text-black">
                  Crossposting 101: Everything You Need to Know to Crosspost on
                  Social Media Effectively
                </h1>
                <p className="text-lg mt-5">
                  Learn what crossposting is and how to effectively share your
                  content across multiple social media platforms to boost your
                  online...
                </p>
              </div>
            </div>
          </div>

          <div className="border shadow-xl">
            <div className="p-5">
              <img
                src={Blog2}
                alt="Left Illustration"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <p className="text-lg text-blue-500 mt-4">
                  Social Media Marketing
                </p>
                <p className="text-sm mt-4">Jan 8, 2025</p>
              </div>
              <div className="mt-2">
                <h1 className="text-2xl font-bold underline text-black">
                  Crossposting 101: Everything You Need to Know to Crosspost on
                  Social Media Effectively
                </h1>
                <p className="text-lg mt-5">
                  Learn what crossposting is and how to effectively share your
                  content across multiple social media platforms to boost your
                  online...
                </p>
              </div>
            </div>
          </div>
          <div className="border shadow-xl">
            <div className="p-5">
              <img
                src={Blog3}
                alt="Left Illustration"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <p className="text-lg text-blue-500 mt-4">
                  Social Media Marketing
                </p>
                <p className="text-sm mt-4">Jan 8, 2025</p>
              </div>
              <div className="mt-2">
                <h1 className="text-2xl font-bold underline text-black">
                  Crossposting 101: Everything You Need to Know to Crosspost on
                  Social Media Effectively
                </h1>
                <p className="text-lg mt-5">
                  Learn what crossposting is and how to effectively share your
                  content across multiple social media platforms to boost your
                  online...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-5 sm:px-16 lg:px-0">
          <div className="border shadow-xl">
            <div className="p-5">
              <img
                src={Blog4}
                alt="Left Illustration"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <p className="text-lg text-blue-500 mt-4">
                  Social Media Marketing
                </p>
                <p className="text-sm mt-4">Jan 8, 2025</p>
              </div>
              <div className="mt-2">
                <h1 className="text-2xl font-bold underline text-black">
                  Crossposting 101: Everything You Need to Know to Crosspost on
                  Social Media Effectively
                </h1>
                <p className="text-lg mt-5">
                  Learn what crossposting is and how to effectively share your
                  content across multiple social media platforms to boost your
                  online...
                </p>
              </div>
            </div>
          </div>

          <div className="border shadow-xl">
            <div className="p-5">
              <img
                src={Blog5}
                alt="Left Illustration"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <p className="text-lg text-blue-500 mt-4">
                  Social Media Marketing
                </p>
                <p className="text-sm mt-4">Jan 8, 2025</p>
              </div>
              <div className="mt-2">
                <h1 className="text-2xl font-bold underline text-black">
                  Crossposting 101: Everything You Need to Know to Crosspost on
                  Social Media Effectively
                </h1>
                <p className="text-lg mt-5">
                  Learn what crossposting is and how to effectively share your
                  content across multiple social media platforms to boost your
                  online...
                </p>
              </div>
            </div>
          </div>
          <div className="border shadow-xl">
            <div className="p-5">
              <img
                src={Blog6}
                alt="Left Illustration"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <p className="text-lg text-blue-500 mt-4">
                  Social Media Marketing
                </p>
                <p className="text-sm mt-4">Jan 8, 2025</p>
              </div>
              <div className="mt-2">
                <h1 className="text-2xl font-bold underline text-black">
                  Crossposting 101: Everything You Need to Know to Crosspost on
                  Social Media Effectively
                </h1>
                <p className="text-lg mt-5">
                  Learn what crossposting is and how to effectively share your
                  content across multiple social media platforms to boost your
                  online...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default Blog;
