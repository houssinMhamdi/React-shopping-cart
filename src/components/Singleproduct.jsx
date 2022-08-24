import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice.js";

import "../styles/Singleproduct.css";
export default function Singleproduct() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
        const { data } = await axios(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err.message);
      }
    };
    fetchProduct();
  }, [id]);

  const { title, price, description, category, image } = product;

  if (loading) {
    return <loading />;
  }
  return (
    <div className="SingleProduct container">
      <div className="left-div">
        <img src={image} alt={title} />
      </div>
      <div className="right-div">
        <h2 className="title">{title}</h2>
        <h3 className="category">{category}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
