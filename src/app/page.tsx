"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import ProductCard from "./components/ProductCard";

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
    <main className="flex w-[52%] flex-col m-auto justify-center ">
      <div className="m-3 shadow-2xl">
        <div className="flex flex-wrap my-2 p-5">
          {products?.map(
            (product) =>
              product.category_id == "K0_UHDQq4QOuCp0GVDbDr" && (
                <div className="mx-1 my-1" key={product.id}>
                  <ProductCard product={product} />
                </div>
              )
          )}
        </div>

        <div className="flex flex-row m-auto justify-center flex-wrap my-2 p-5">
          {products?.map(
            (product) =>
              product.category_id == "15zyVLkUSCOjcfEJC4r-U" && (
                <div className="mx-1 my-1" key={product.id}>
                  <ProductCard product={product} />
                </div>
              )
          )}
        </div>
        <div className="flex flex-row justify-center flex-wrap my-2 p-5">
          {products?.map(
            (product) =>
              product.category_id == "ICSEp2TVd3N9QLnDtZkx_" && (
                <div className="mx-1 my-1" key={product.id}>
                  <ProductCard product={product} />
                </div>
              )
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
