import React, { useState } from "react";
import REDMINote12 from "@/app/images/REDMINote12.webp";
import Image from "next/image";

const ProductCard = () => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${
        hovered ? "border-orange-500" : "border-gray-300"
      } border border-gray-200 max-w-xs bg-white cursor-pointer
       transition-all duration-300 `}
    >
      <div className="relative">
        <div className="absolute top-0 left-0 bg-green-700 text-white font-bold">
          <p className="text-[20px] px-1">90%</p>
          <p className="text-[9px] px-1">
            SPEC <br /> SCORE
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <Image
            src={REDMINote12}
            alt="image"
            width={130}
            height={120}
            className="object-cover mt-2"
          />
        </div>
      </div>

      <div className="p-4 text-center">
        <h2 className="text-lg font-semi-bold text-gray-800 my-1">
          Samsung Galaxy S22 Plus
        </h2>
        <p className="text-xl text-orange-500 font-semi-bold mt-2 my-1">
          Rs. 52,999
        </p>
      </div>

      <div
        className={`${
          hovered ? "bg-orange-600" : "bg-gray-300"
        } bg-gray-700 p-2 text-center `}
      >
        <button className="w-full text-white font-medium transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
