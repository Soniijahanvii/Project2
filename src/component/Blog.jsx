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
      <div className="container mt-40 flex">
        <div className="mt-10  w-full h-full ml-10  mr-2  flex justify-center">
          <img
            src={Blogimage}
            alt="Left Illustration"
            className="w-auto h-auto object-cover"
          />
        </div>
        <div>
          <div className="text-center lg:text-left text-xl mt-20">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              How to Run Ads on TikTok: A Setp-by-Step Guide to TikTok
              Advertising
            </h1>
            <p className="mt-16">
              This article takes you through everything you need to know to run
              TikTok ads and implement a solid advertising strategy.
            </p>
            <div className="flex gap-24">
              <p className="mt-10 text-sm">Jan 9, 2025</p>
              <p className="mt-10 text-sm"> 16 min read</p>
              <p className="mt-10 text-sm">TikTok</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-xl font-bold text-center">Latest Updates</h1>
        <div className="flex-grow border-t border-gray-400 ml-44 mr-44"></div>
        <div className="flex mt-5 gap-5 ml-16 mr-16">
          <div className=" border shadow-xl">
            <div className=" p-10">
              <img
                src={Blog1}
                alt="Left Illustration"
                className="w-96 h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex gap-28">
                <p className="text-lg text-blue-500 mt-4 ml-1">
                  Social Media Marketing
                </p>
                <p className="text-sm  mt-4 ml-16">Jan 8, 2025</p>
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
            <div className="p-10">
              <img
                src={Blog2}
                alt="Left Illustration"
                className="w-96 h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex gap-28">
                <p className="text-lg text-blue-500 mt-4 ml-1">
                  Social Media Marketing
                </p>
                <p className="text-sm mt-4 ml-16">Jan 8, 2025</p>
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
            <div className="p-10">
              <img
                src={Blog3}
                alt="Left Illustration"
                className="w-96 h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex gap-28">
                <p className="text-lg text-blue-500 mt-4 ml-1">
                  Social Media Marketing
                </p>
                <p className="text-sm mt-4 ml-16">Jan 8, 2025</p>
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
        <div className="flex mt-5 gap-5 ml-16 mr-16">
          <div className="border shadow-xl">
            <div className="p-10">
              <img
                src={Blog4}
                alt="Left Illustration"
                className="w-96 h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex gap-28">
                <p className="text-lg text-blue-500 mt-4 ml-1">
                  Social Media Marketing
                </p>
                <p className="text-sm mt-4 ml-16">Jan 8, 2025</p>
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
            <div className="p-10">
              <img
                src={Blog5}
                alt="Left Illustration"
                className="w-96 h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex gap-28">
                <p className="text-lg text-blue-500 mt-4 ml-1">
                  Social Media Marketing
                </p>
                <p className="text-sm mt-4 ml-16">Jan 8, 2025</p>
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
            <div className="p-10">
              <img
                src={Blog6}
                alt="Left Illustration"
                className="w-96 h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex gap-28">
                <p className="text-lg text-blue-500 mt-4 ml-1">
                  Social Media Marketing
                </p>
                <p className="text-sm mt-4 ml-16">Jan 8, 2025</p>
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
