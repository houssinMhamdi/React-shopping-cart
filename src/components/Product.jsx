import React from "react";
import "../styles/Products.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice.js";
export default function Product({ id, image, title, price }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div className="product">
      <div className="image-container ">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <h3>${price}</h3>
      </div>
      <div className="buttons">
        <button onClick={() => navigate(`/products/${id}`)}>
          product details
        </button>
        <button
          onClick={() => dispatch(addToCart({ id, image, title, price }))}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
