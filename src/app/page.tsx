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
    <div className="flex w-[65%] m-auto bg-green-200">
      {products?.map((product) => (
        <ProductCard product={product} />
        // <div key={product.id}>
        //   <Image src={product.images[1]} width={200} height={200} alt="img" />
        // </div>
      ))}
    </div>
  );
};

export default Home;
