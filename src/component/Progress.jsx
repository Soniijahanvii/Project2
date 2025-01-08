import React from "react";

const Progress = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 xl:gap-60 mt-16 lg:mt-28 px-4 mb-20 ">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-blue-800 font-bold">
          10 years
        </h1>
        <p className="text-lg sm:text-xl mt-2">in business</p>
      </div>
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-blue-800 font-bold">
          140,000
        </h1>
        <p className="text-lg sm:text-xl mt-2">users</p>
      </div>
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-blue-800 font-bold">
          100k+
        </h1>
        <p className="text-lg sm:text-xl mt-2">monthly blog readers</p>
      </div>
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-blue-800 font-bold">
          1.2m+
        </h1>
        <p className="text-lg sm:text-xl mt-2">social followers</p>
      </div>
    </div>
  );
};

export default Progress;
