"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

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
    <div>
      <h1>Home Page</h1>
      {products?.map((product) => (
        <div>
          <Image src={product.images[1]} width={200} height={200} />
        </div>
      ))}
    </div>
  );
};

export default Home;
