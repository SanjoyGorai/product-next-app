"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import ProductCard from "./components/ProductCard";
import ProductCardS from "./components/ProductCardS";

const Home = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/api/products/");
        console.log("products", response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="flex w-[55%] flex-row m-auto flex-wrap">
      <div className="m-4">
        <ProductCardS />
      </div>
      {/* {products?.map(
        (product) =>
          product.category_id == "K0_UHDQq4QOuCp0GVDbDr" && (
            <ProductCard product={product} />
          )
        // <div key={product.id}>
        //   <Image src={product.images[1]} width={200} height={200} alt="img" />
        // </div>
      )}

      {products?.map(
        (product) =>
          product.category_id == "15zyVLkUSCOjcfEJC4r-U" && (
            <ProductCard product={product} />
          )
        // <div key={product.id}>
        //   <Image src={product.images[1]} width={200} height={200} alt="img" />
        // </div>
      )} */}
    </div>
  );
};

export default Home;
