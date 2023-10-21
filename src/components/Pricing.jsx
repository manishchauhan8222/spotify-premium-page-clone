import React from "react";
import paypal from "../assets/paypal.png";
import max from "../assets/max.svg";
import master from "../assets/master.svg";
import visa from "../assets/visa.svg";
import discover from "../assets/discover.svg";
import { BsCheck2 } from "react-icons/bs";

const Pricing = () => {
  return (
    <div className="w-full bg-[#EFEFEF] h-auto text-black">

      <div className="max-w-[1170px] mx-auto">

        <div className="text-center pt-20 pb-12 mx-auto">
          <h1 className="text-4xl font-bold">Pick your Premium</h1>
          <p className="py-1 font-light">
            Listen without limits on your phone, speaker, and other devices.
          </p>
          <div className="flex justify-center py-2">
            <img className="h-[20px] w-[29px] mx-1" src={visa} alt="/" />
            <img className="h-[20px] w-[29px] mx-1" src={master} alt="/" />
            <img className="h-[20px] w-[29px] mx-1" src={max} alt="/" />
            <img className="h-[20px] w-[29px] mx-1" src={discover} alt="/" />
            <img className="h-[20px] w-[29px] mx-1" src={paypal} alt="/" />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-3 pb-28 mx-auto">

          <div className="w-[450px] lg:w-auto  shadow-gray-300 shadow-inner border-2 border-gray-300 rounded-xl bg-white p-4 mx-auto">
            <div className="w-24 h-auto bg-[#1D75DE] text-white text-sm font-bold p-1 rounded">
              1 month free
            </div>
            <div className="py-2">
              <h3 className="text-2xl font-bold">Individual</h3>
              <p className="font-light py-1">$9.99/month after offer period</p>
              <p className="font-light ">1 account</p>
            </div>
            <div className="border-t-[1px] border-black my-4"></div>
            <div className="lg:h-[265px] text-black font-light">
              <p className="flex max-w-[203px]">
                <BsCheck2 className="w-6 h-6 mx-1 " /> Ad-free music listening
              </p>
              <p className="flex py-2 max-w-[203px]">
                <BsCheck2 className="w-6 h-6 mx-1 " /> Play anywhere - even
                offline
              </p>
              <p className="flex max-w-[203px]">
                <BsCheck2 className="w-6 h-6 mx-1 " /> On-demand playback
              </p>
            </div>
            <button className="uppercase rounded-full bg-black text-sm px-8 my-4 py-4 text-white font-light w-full">
              get started
            </button>
            <p className="font-light text-xs py-4  lg:max-w-[230px] text-gray-600 lg:h-[140px]">
              <span className="underline cursor-pointer">
                Terms and conditions apply.
              </span>{" "}
              1 month free not available for users who have already tried
              Premium.
            </p>
          </div>

          <div className="w-[450px] lg:w-auto shadow-gray-300 shadow-inner border-2 border-gray-300 rounded-xl bg-white p-4 mx-auto">
            <div className="w-24 h-auto bg-[#1D75DE] text-white text-sm font-bold p-1 rounded">
              1 month free
            </div>
            <div className="py-2">
              <h3 className="text-2xl font-bold">Duo</h3>
              <p className="font-light py-1">$12.99/month after offer period</p>
              <p className="font-light ">2 account</p>
            </div>
            <div className="border-t-[1px] border-black my-4"></div>
            <div className="lg:h-[265px] text-black font-light">
              <p className="flex max-w-[203px]">
                <BsCheck2 className="w-6 h-6 mx-1 " /> 2 Premium accounts for a couple under one roof
              </p>
              <p className="flex py-2 max-w-[203px]">
                <BsCheck2 className="w-6 h-6 mx-1 " /> Ad-free music listening, play offline, on-demand playback
              </p>
            </div>
            <button className="uppercase rounded-full bg-black text-sm px-8 my-4 py-4 text-white font-light w-full">
              get started
            </button>
            <p className="font-light text-xs py-4  lg:max-w-[230px] text-gray-600 lg:h-[140px]">
              <span className="underline cursor-pointer">
                Terms and conditions apply.
              </span>{" "}
              1 month free not available for users who have already tried
              Premium.
            </p>
          </div>

          <div className="w-[450px] lg:w-auto   shadow-gray-300 shadow-inner border-2 border-gray-300 rounded-xl bg-white p-4 mx-auto">
            <div className="w-24 h-auto bg-[#1D75DE] text-white text-sm font-bold p-1 rounded">
              1 month free
            </div>
            <div className="py-2">
              <h3 className="text-2xl font-bold">Family</h3>
              <p className="font-light py-1">$15.99/month after offer period</p>
              <p className="font-light ">1 account</p>
            </div>
            <div className="border-t-[1px] border-black my-4"></div>
            <div className="lg:h-[265px] text-black font-light">
              <p className="flex max-w-[203px]">
                <BsCheck2 className="w-6 h-6 mx-1 " /> 6 Premium accounts for family members living under one roof
              </p>
              <p className="flex py-2 max-w-[203px]">
                <BsCheck2 className="w-6 h-6 mx-1 " /> Block explicit music
              </p>
              <p className="flex max-w-[203px]">
                <BsCheck2 className="w-6 h-6 mx-1 " /> Ad-free music listening, play offline, on-demand playback
              </p>
              <p className="flex max-w-[203px] py-2">
                <BsCheck2 className="w-6 h-6 mx-1 " /> Spotify Kids: a separate app made just for kids
              </p>
            </div>
            <button className="uppercase rounded-full bg-black text-sm px-8 my-4 py-4 text-white font-light w-full">
              get started
            </button>
            <p className="font-light text-xs py-4  lg:max-w-[230px] text-gray-600 lg:h-[140px]">
              <span className="underline cursor-pointer">
                Terms and conditions apply.
              </span>{" "}
              1 month free not available for users who have already tried
              Premium.
            </p>
          </div>

          <div className="w-[450px] lg:w-auto  shadow-gray-300 shadow-inner border-2 border-gray-300 rounded-xl bg-white p-4 mx-auto">
            <div className="w-24 h-auto bg-[#1D75DE] text-white text-sm font-bold p-1 rounded">
              1 month free
            </div>
            <div className="py-2">
              <h3 className="text-2xl font-bold">Student</h3>
              <p className="font-light py-1">$4.99/month after offer period</p>
              <p className="font-light ">1 account</p>
            </div>
            <div className="border-t-[1px] border-black my-4"></div>
            <div className="lg:h-[265px] text-black font-light">
            <p className="flex max-w-[203px]">
                <BsCheck2 className="w-6 h-6 mx-1 " /> Hulu (ad-supported) plan
              </p>
              <p className="flex max-w-[203px] py-2">
                <BsCheck2 className="w-6 h-6 mx-1 " /> SHOWTIME
              </p>
              <p className="flex max-w-[203px]">
                <BsCheck2 className="w-6 h-6 mx-1 " /> Ad-free music listening
              </p>
              <p className="flex py-2 max-w-[203px]">
                <BsCheck2 className="w-6 h-6 mx-1 " /> Play anywhere - even
                offline
              </p>
              <p className="flex max-w-[203px]">
                <BsCheck2 className="w-6 h-6 mx-1 " /> On-demand playback
              </p>
            </div>
            <button className="uppercase rounded-full bg-black text-sm px-8 my-4 py-4 text-white font-light w-full">
              get started
            </button>
            <p className="font-light text-xs py-4  lg:max-w-[230px] text-gray-600 lg:h-[140px]">

              Offer currently includes access to Hulu (ad-supported) plan and
              SHOWTIME Streaming Service, subject to eligibility. Available only
              to students at an accredited higher education institution. 1 month
              free only open to higher education students who haven't already
              tried Premium <span className="underline cursor-pointer">
                Terms and conditions apply.
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
