import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Product from "./Product";
import "../styles/Products.css";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
        setIsLoading(false);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="Products container">
      {products.map((product) => {
     
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
}
