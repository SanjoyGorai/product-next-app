"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
    </div>
  );
};

export default Home;
