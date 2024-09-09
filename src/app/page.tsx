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
    <div className="flex w-[60%] flex-row m-auto justify-center flex-wrap my-2 shadow p-5">
      {products?.map(
        (product) =>
          product.category_id == "K0_UHDQq4QOuCp0GVDbDr" && (
            <div className="mx-1 my-1" key={product.id}>
              <ProductCardS product={product} />
            </div>
          )
      )}

      {products?.map(
        (product) =>
          product.category_id == "15zyVLkUSCOjcfEJC4r-U" && (
            <ProductCardS product={product} />
          )
      )}
    </div>
  );
};

export default Home;
