import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 w-full mt-5 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">About Us</h2>
            <p className="text-base sm:text-lg">
              We provide top-notch tools and services to make your workflow
              easier and more efficient. Our goal is to deliver quality
              solutions that empower businesses and individuals.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Quick Links
            </h2>
            <ul className="space-y-2 text-center text-base sm:text-lg">
              <li>
                <a
                  href="/tools"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href="/create"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Updated Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-base sm:text-lg">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="mt-4 flex flex-col gap-4 sm:items-center sm:flex-row">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 hover:translate-y-[-2px] active:bg-blue-800 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
