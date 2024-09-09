import React, { useState } from "react";
import REDMINote12 from "@/app/images/REDMINote12.webp";
import Image from "next/image";
import { convertToRupees } from "../utils/formattedNumber";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${
        hovered ? "border-orange-500 shadow-lg" : "border-gray-300"
      } flex flex-col justify-between border border-[E7E7E7] bg-white cursor-pointer
       transition-all duration-300 min-w-[223px] max-w-[223px] min-h-[283px] max-h-[283px]`}
    >
      <div className="relative">
        <div
          className="absolute top-0 left-0 bg-[#72A02B] text-white font-bold 
        w-[43px] h-[47px]"
        >
          <p className="text-[16px] px-1">90%</p>
          <p className="text-[8px] px-1">
            SPEC <br /> SCORE
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <Image
            priority
            src={
              product.images.length < 1 ? product.images[1] : product.images[0]
            }
            alt="image"
            width={130}
            height={120}
            className="object-cover mt-2 max-h-[160px] min-h-[160px] max-w-[120px]"
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-[16px] font-semi-bold text-gray-800">
          {product.title.substring(0, 25)}
        </h2>
        <p className="text-xl text-orange-500 font-semi-bold">
          {convertToRupees(product.price)}
        </p>
      </div>

      <div
        className={`${
          hovered ? "bg-orange-600 text-white shadow-lg" : "bg-gray-300"
        } h-[33px] flex bg-[E7E7E7] text-center items-center`}
      >
        <button
          className={`${
            hovered ? "text-white" : ""
          } w-full bottom-0 text-sm text-gray-800 font-medium transition-all duration-300`}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
