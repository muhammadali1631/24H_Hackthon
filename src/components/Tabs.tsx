"use client";
import { reviews } from "@/data/reviews";
import React, { useState } from "react";
import Review from "./Review";
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import Faqs from "./Faqs";

const Tabs = () => {
  const [showThis, setShowThis] = useState("reviews");
  return (
    <div className="font-sans p-4 w-[100%]">
      <ul className="flex">
        <li
          onClick={() => setShowThis("details")}
          className={`text-center w-[33%] tab  font-semibold text-[15px] py-2.5 border-b-2 cursor-pointer ${showThis === "details" ? "border-black text-black" : "border-gray-300 text-gray-500"}`}
        >
          Product Details
        </li>
        <li
          onClick={() => setShowThis("reviews")}
          className={`text-center w-[33%] tab  font-semibold text-[15px] py-2.5 border-b-2 cursor-pointer ${showThis === "reviews" ? "border-black text-black" : "border-gray-300 text-gray-500"}`}
        >
          Rating & Reviews
        </li>
        <li
          onClick={() => setShowThis("faq")}
          className={`text-center w-[33%] tab  font-semibold text-[15px] py-2.5 border-b-2 cursor-pointer ${showThis === "faq" ? "border-black text-black" : "border-gray-300 text-gray-500"}`}
        >
          FAQs
        </li>
      </ul>
      {showThis === "reviews" && (
        <>
          <div className="flex justify-between px-0 sm:px-6 my-4">
            <h1 className="text-black text-sm sm:text-xl font-semibold">
              All Reviews{" "}
              <span className="text-gray-300 text-base font-medium">
                {"(451)"}
              </span>
            </h1>
            <div className="flex gap-3">
              <VscSettings className="bg-gray-200 text-black h-9 w-9 rounded-full p-1" />
              <button className="bg-gray-200 hidden sm:flex px-4 py-2 rounded-full  items-center gap-2">
                Latest <IoIosArrowDown />
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2">
                Write a review
              </button>
            </div>
          </div>
          <div className="flex justify-around gap-10 mt-10 flex-wrap">
            {reviews.map((review, index) => (
              <Review key={index} review={review} count={200} />
            ))}
          </div>
        </>
      )}
      {showThis === "faq" && <Faqs />}
      {showThis === 'details'&& (
        <div>
            <h4 className="text-2xl font-bold my-4">Details</h4>
            <ul className="list-disc ml-8 space-y-3">
                <li className="text-xl"><span className="font-bold ">Premium Quality:</span> Made with high-grade materials to ensure durability and long-lasting performance.</li>
                <li className="text-xl"><span className="font-bold ">Innovative Design:</span> Thoughtfully designed to combine aesthetics and practicality for modern living.</li>
                <li className="text-xl"><span className="font-bold ">Versatile Use:</span> Ideal for a variety of applications, catering to your unique preferences.</li>
                <li className="text-xl"><span className="font-bold ">User-Friendly:</span> Created with environmentally friendly practices in mind.</li>
            </ul>
        </div>
      )}
    </div>
  );
};

export default Tabs;
