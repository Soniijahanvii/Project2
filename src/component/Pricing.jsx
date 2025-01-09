import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Pricing = () => {
  return (
    <>
      <div className="fixed gap-10 w-full z-50 bg-white">
        <Navbar />
      </div>
      <div id="#pricing" className="mt-44 px-4">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-center font-bold">
            Flexible pricing for everyone
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-20 gap-10 ml-10 mr-10 md:gap-20">
          <div className="border border-black rounded-2xl p-4 shadow-2xl w-full md:w-1/3">
            <h1 className="text-xl sm:text-2xl text-gray-800 font-bold ml-2">
              Free
            </h1>
            <h1 className="text-4xl sm:text-6xl font-bold flex mt-2">
              Free{" "}
              <p className="text-base sm:text-lg font-bold mt-6 ml-1">
                forever
              </p>
            </h1>
            <p className="text-gray-700 mt-2">Connect up to 3 channels</p>
            <div>
              <button
                className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:translate-y-[-2px] active:bg-blue-800 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 text-lg sm:text-xl mt-4"
                type="submit"
              >
                Let's Go!!
              </button>
            </div>
            <h3 className="text-black text-lg mt-4 ml-1">What’s included</h3>
            <ul className="list-disc pl-6 pr-4 text-base sm:text-xl mt-4">
              <li className="mt-4">10 scheduled posts per channel anytime</li>
              <li className="mt-4">100 ideas</li>
              <li className="mt-4">1 user account</li>
              <li className="mt-4">AI Assistant</li>
              <li className="mt-4">World-class customer support</li>
            </ul>
          </div>

          <div className="border border-black rounded-2xl p-4 shadow-2xl w-full md:w-1/3">
            <h1 className="text-xl sm:text-2xl text-gray-800 font-bold ml-2">
              Essentials
            </h1>
            <h1 className="text-4xl sm:text-6xl font-bold flex mt-2">
              $10{" "}
              <p className="text-base sm:text-lg font-bold mt-6 ml-1">/month</p>
            </h1>
            <p className="text-gray-700 mt-2">
              $120 USD billed yearly (save 2 months)
            </p>
            <div>
              <button
                className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:translate-y-[-2px] active:bg-blue-800 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 text-lg sm:text-xl mt-4"
                type="submit"
              >
                Start 14 day free Trial
              </button>
            </div>
            <h3 className="text-black text-lg mt-4 ml-1">What’s included</h3>
            <ul className="list-disc pl-6 pr-4 text-base sm:text-xl mt-4">
              <li className="mt-4">Unlimited scheduled posts per channel</li>
              <li className="mt-4">Advanced analytics</li>
              <li className="mt-4">First comment scheduling</li>
              <li className="mt-4">Engagement inbox</li>
              <li className="mt-4">Hashtag manager</li>
            </ul>
          </div>

          <div className="border border-black rounded-2xl p-4 shadow-2xl w-full md:w-1/3">
            <h1 className="text-xl sm:text-2xl text-gray-800 font-bold ml-2">
              Team
            </h1>
            <h1 className="text-4xl sm:text-6xl font-bold flex mt-2">
              $20{" "}
              <p className="text-base sm:text-lg font-bold mt-6 ml-1">/month</p>
            </h1>
            <p className="text-gray-700 mt-2">
              $240 USD billed yearly (save 2 months)
            </p>
            <div>
              <button
                className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:translate-y-[-2px] active:bg-blue-800 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 text-lg sm:text-xl mt-4"
                type="submit"
              >
                Start 14 day free Trial
              </button>
            </div>
            <h3 className="text-black text-lg mt-4 ml-1">What’s included</h3>
            <ul className="list-disc pl-6 pr-4 text-base sm:text-xl mt-4">
              <li className="mt-4">Access levels</li>
              <li className="mt-4">Unlimited ideas</li>
              <li className="mt-4">Unlimited scheduled posts per channel</li>
              <li className="mt-4">Content approval workflows</li>
              <li className="mt-4">Unlimited user accounts</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
