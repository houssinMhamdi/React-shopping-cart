import "../styles/Cart.css";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
} from "../redux/features/cartSlice";
import React from "react";

export default function CartItem(props) {
  const { image, title, price, quantity } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <div className="cart-item">
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
        <div className="product-title">
          <h2>{title}</h2>
          <h2 className="product-price">${price}</h2>
          <button onClick={() => dispatch(removeFromCart(props))}>
            {console.log("clicded med")}
            Remove from cart
          </button>
        </div>
        <div className="quantity">
          <button onClick={() => dispatch(subtractItemQuantity(props))}>
            <IoRemoveSharp />
          </button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(addItemQuantity(props))}>
            <IoAddSharp />
          </button>
        </div>
      </div>
    </div>
  );
}
