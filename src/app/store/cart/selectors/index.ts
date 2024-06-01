import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";

// selector to get the total quantity of items in the cart
// this selector is memoized, so it will only recompute if the items in the cart change
export const getCartTotalQuantity = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce((acc, item) => {
      return acc + item;
    }, 0);

    return totalQuantity;
  }
);
