import Image from "next/image";
import React from "react";
import REDMINote12 from "@/app/images/REDMINote12.webp";
import { convertToRupees } from "../utils/formattedNumber";

const ProductCard = ({ product }) => {
  console.log("ProductCard: ", product);

  return (
    <div className="flex flex-col w-60 items-center m-2 cursor-pointer hover:border-orange-500">
      <div className="border flex flex-col text-center items-center w-60 m-2 mb-0 ">
        <Image
          src={product.images[1]}
          width={130}
          height={120}
          alt="img"
          className="mt-2"
        />
        <h2 className="mt-2 font-semibold">{product.title.substring(0, 25)}</h2>
        <h2 className="font-bold text-orange-600">
          {convertToRupees(product.price)}
        </h2>
        <hr className="bg-gray-800" />
      </div>
      <div
        className="border-t w-full h-8 items-center text-center bg-gray-600
     hover:bg-orange-600 "
      >
        View Details
      </div>
    </div>
  );
};

export default ProductCard;
