import React from 'react';

function Hero() {
  return (
    <div className="text-center ">
      <img
        src="https://picsum.photos/id/10/2500/1667"
        className="w-full h-[32rem]
         md:h-100"
        alt="firstImage"
      />
      <div className="absolute  top-[20rem] left-[2rem] text-2xl md:text-3xl font-bold text-slate-200">
        <h2 className=" sm:text-6xl md:text-8xl font-extrabold space-x-4">
          DISCOVER GOD...
        </h2>
        <p className="md:text-2xl text-xl text-left mt-1">
          Join us on Sundays at 10am <br />@ 30, Alhaji Amoo Street.
          <br />
          Lagos, Nigeria
        </p>
      </div>
    </div>
  );
}
export default Hero;
