import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  totalAmount: 0,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isItemExists = state.cartItems.find(
        (item) => item.id === payload.id
      );
      if (!isItemExists) {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
      } else {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
      state.quantity++;
      state.totalAmount += payload.price;
    },

    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.quantity -= payload.quantity;
      state.totalAmount -= payload.price * payload.quantity;
    },

    addItemQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.quantity++;
      state.totalAmount += payload.price;
    },

    subtractItemQuantity: (state, { payload }) => {
      const subItem = state.cartItems.find((item) => item.id === payload.id);
      if (subItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== subItem.id
        );
      } else {
        subItem.quantity -= 1;
      }
      state.quantity--;
      state.totalAmount -= subItem.price;
    },
  },
});

export const { addToCart, removeFromCart, subtractItemQuantity, addItemQuantity } =
  counterSlice.actions;

export default counterSlice.reducer;
