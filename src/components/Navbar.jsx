import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { IoBag } from "react-icons/io5";
import { useSelector } from "react-redux";
export default function Navbar() {
  const { quantity } = useSelector((state) => state.cart);

  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">Products</Link>
        <Link to="/cart" className="cart">
          <IoBag />
          {quantity !== 0 && <span>{quantity}</span>}
        </Link>
      </div>
    </div>
  );
}
