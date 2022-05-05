import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeFromCart(state, action) {
      const newCart = state.products.filter(
        (cartProduct) => cartProduct.id !== action.payload.id
      );

      state.products = newCart;
    },
  },
});

export const { addProduct, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
