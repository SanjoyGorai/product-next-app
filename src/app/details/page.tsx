import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";

const DetailsPage = () => {
  return (
    <div className="flex m-auto rounded w-[52%]">
      <div className="border w-full h-96 m-5">
        <div className="flex justify-between w-full p-2">
          <p className="text-[12px]">
            Mobiles› Samsung Mobile Phones› Samsung Galaxy M35 5G
          </p>
          <p className="text-[12px]">Updated on: Sep 09, 2024</p>
        </div>
        <hr />
        <div className="flex justify-between w-full p-2">
          <h1 className="font-bold">Samsung Galaxy M35 5G</h1>
          <p className="text-[12px]">Updated on: Sep 09, 2024</p>
          <div className="flex">
            <div className="flex me-2 justify-center border border-orange-400 font-bold rounded w-20 items-center text-orange-500">
              <FaRegHeart size={12} />
              <span className="text-sm">COMPARE</span>
            </div>
            <div className="flex ms-2 justify-center border border-orange-400 font-bold rounded w-20 items-center text-orange-500">
              <IoAddOutline />
              <span className="text-sm">SHORTLIST</span>
            </div>
          </div>
        </div>

        <Image src={""} alt="image" />
      </div>
    </div>
  );
};

export default DetailsPage;
