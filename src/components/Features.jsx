import React from "react";
import downloads from "../assets/downloads.png";
import adsfree from "../assets/adsfree.png";
import music from "../assets/music.png";
import skip from "../assets/skip.png";

const Features = () => {
  return (
    <div className="w-full min-h-[547.5px] bg-white text-black flex flex-col mx-auto">
      <div className="text-center mx-auto">
        <h1 className="lg:text-4xl text-2xl font-extrabold lg:font-extrabold pt-16">Why go Premium?</h1>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4  max-w-[1170px] mx-auto md:px-4 lg:py-16 py-12 items-center">

        <div className="lg:text-center min-w-[285px] lg:h-[259px] flex lg:flex-col justify-start">
          <img className="lg:h-[142px] h-28 w-28 lg:w-[142px] md:mx-auto " src={downloads} alt="/" />
          <div className="p-5 lg:px-0">
          <h3 className="text-xl font-bold">Download music.</h3>
          <p className="pt-2 font-light">Listen anywhere.</p>
          </div>

        </div>

        <div className="lg:text-center min-w-[285px] h-[259px] flex lg:flex-col py-8 lg:py-0 items-center">
          <img className="lg:h-[142px] h-28 w-28 lg:w-[142px] md:mx-auto " src={adsfree} alt="/" />
          <div className="p-5 lg:px-0">
          <h3 className="text-xl font-bold ">Ad-free music listening.</h3>
          <p className="pt-2 font-light">Enjoy nonstop music.</p>
          </div>

        </div>
        <div className="lg:text-center min-w-[285px] lg:h-[259px] flex lg:flex-col items-center">
          <img className="lg:h-[142px] h-28 w-28 lg:w-[142px] md:mx-auto " src={music} alt="/" />
          <div className="p-5 lg:px-0">
          <h3 className="text-xl font-bold ">Play any song.</h3>
          <p className="pt-2 font-light">Even on mobile.</p>
          </div>

        </div>
        <div className="lg:text-center min-w-[285px] h-[259px] flex lg:flex-col py-8 lg:py-0 items-center">
          <img className="lg:h-[142px] h-28 w-28 lg:w-[142px] md:mx-auto " src={skip} alt="/" />
          <div className="p-5 lg:px-0">
          <h3 className="text-xl font-bold">Unlimited skips.</h3>
          <p className="pt-2 font-light">Just hit next.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;
