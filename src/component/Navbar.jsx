import React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <>
      <div className="flex p-3  bg-white">
        <div className=" ml-20">
          <svg width="100%" height="100%" viewBox="0 0 143 36" className="w-40">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.404053 8.24483L15.821 0.258789L31.4041 8.24483L15.821 16.2588L0.404053 8.24483ZM92.9582 12.1276V11.9375C92.9582 9.30306 94.5076 8.46113 97.1172 8.65125V3.84414C90.8651 3.46392 87.902 6.58718 87.902 11.9375V12.1276H85.075V16.9347H87.902V31.4918H92.9582V16.9347H95.948H97.1172H98.7751V31.4918H103.831V16.9347H107.99V12.1276H103.831V11.9375C103.831 9.30306 105.354 8.46113 107.99 8.65125V3.84414C101.738 3.46392 98.7751 6.58718 98.7751 11.9375V12.1276H97.1172H95.948H92.9582ZM57.6198 17.3959C59.2236 16.1194 60.2021 14.2998 60.2021 11.9641C60.2021 7.42862 56.5052 4.33252 51.8568 4.33252H41.0652V31.437H52.7267C57.4838 31.437 61.2894 28.2322 61.2894 23.5881C61.2351 20.7907 59.8216 18.6452 57.6198 17.3959ZM51.8841 9.35689C53.6238 9.35689 54.8199 10.6334 54.8199 12.3444C54.8199 14.0554 53.5694 15.3318 51.8841 15.3318H46.4746V9.35689H51.8841ZM52.6996 26.4669H46.4746V20.0846H52.6996C54.5481 20.0846 55.88 21.4426 55.88 23.2622C55.88 25.109 54.5481 26.4669 52.6996 26.4669ZM77.0557 12.0996V22.5557C77.0557 25.9234 75.2072 27.3628 72.7336 27.3628C70.4502 27.3628 68.8463 26.0049 68.8463 23.3705V12.0996H63.7903V23.9952C63.7903 29.1553 67.0251 32.007 71.2113 32.007C73.8481 32.007 75.8868 31.0293 77.0285 29.2911V31.4638H82.0846V12.0996H77.0557ZM128.949 23.8327H114.161C114.895 26.3856 117.015 27.472 119.652 27.472C121.636 27.472 123.213 26.6572 124.056 25.5437L128.133 27.8522C126.312 30.4866 123.376 32.0075 119.598 32.0075C113.019 32.0075 108.86 27.5535 108.86 21.7686C108.86 15.9838 113.046 11.5298 119.217 11.5298C125.007 11.5298 129.139 16.0653 129.139 21.7686C129.139 22.5291 129.057 23.1809 128.949 23.8327ZM119.217 16.0653C116.499 16.0653 114.65 17.5047 114.079 19.9762H124.083C123.458 17.1788 121.337 16.0653 119.217 16.0653ZM136.451 15.441V12.1004H131.395V31.4646H136.451V22.2035C136.451 18.1297 139.768 16.9619 142.405 17.2878V11.7202C139.931 11.7202 137.457 12.8066 136.451 15.441ZM15.821 29.9625L5.30312 24.2588L0.404053 26.9069L15.821 35.2588L31.4041 26.9069L26.4496 24.2588L15.821 29.9625ZM5.30312 15.2588L15.821 20.4312L26.4496 15.2588L31.4041 17.6726L15.821 25.2588L0.404053 17.6726L5.30312 15.2588Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <nav className="container flex  flex-wrap justify-between md:items-center text-black px-5 pt-6 md:px-20 ">
          <div>
            <ul className="flex justify-center  gap-44 mr-6 ml-40 text-2xl font-semibold">
              <div className=" relative group">
                <a href="/tools">
                  <li className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer flex">
                    Tools
                    <ChevronDownIcon className="h-4 w-4 ml-2 mt-2" />
                  </li>
                </a>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-0 w-48 z-10">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a
                      href="/tool1"
                      onClick={() => console.log("Navigating to Tool 1")}
                    >
                      Tool 1
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a
                      href="/tool2"
                      onClick={() => console.log("Navigating to Tool 2")}
                    >
                      Tool 2
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a
                      href="/tool3"
                      onClick={() => console.log("Navigating to Tool 3")}
                    >
                      Tool 3
                    </a>
                  </li>
                </ul>
              </div>
              <div className="relative group">
                <a href="/Channels">
                  <li className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer flex">
                    Channels
                    <ChevronDownIcon className="h-4 w-4 ml-2 mt-2" />
                  </li>
                </a>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-0 w-48 z-10">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/tool1">Tool 1</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/tool2">Tool 2</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/tool3">Tool 3</a>
                  </li>
                </ul>
              </div>

              <a href="/pricing">
                <li>Pricing</li>
              </a>
              <a href="/blog">
                <li>Blog</li>
              </a>

              <a href="/login">
                <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-600 active:bg-blue-800 active:translate-y-0 transition duration-300 hover:translate-y-[-2px] mb-2">
                  Login
                </button>
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
