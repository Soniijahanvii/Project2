import React from "react";

const Progress = () => {
  return (
    <div className="flex gap-60 mt-32 ml-32">
      <div>
        <h1 className="text-5xl text-blue-800 font-bold">10 years</h1>
        <p className="text-center text-xl mt-2">in business</p>
      </div>
      <div>
        <h1 className="text-5xl text-blue-800 font-bold">140,000</h1>
        <p className="text-center text-xl mt-2">users</p>
      </div>
      <div>
        <h1 className="text-5xl text-blue-800 font-bold">100k+</h1>
        <p className="text-center text-xl mt-2">monthly blog readers</p>
      </div>
      <div>
        <h1 className="text-5xl text-blue-800 font-bold">1.2m+</h1>
        <p className="text-center text-xl mt-2">social followers</p>
      </div>
    </div>
  );
};

export default Progress;
