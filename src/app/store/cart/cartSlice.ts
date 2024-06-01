import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICartState {
  items: {
    [key: number]: number; // key is product id, value is selected quantity of that product
  };
}

const initialState: ICartState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      // if the product is already in the cart, increment the quantity
      if (state.items[id]) {
        state.items[id]++;
      } else {
        // otherwise, add the product to the cart with quantity 1
        state.items[id] = 1;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
