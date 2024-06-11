import { Category } from "../types/product.type";

// A simple sleep function to simulate a slow network request.
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Remove duplicates categories array
export const removeDuplicates = (arr: Category[]): Category[] => {
  return arr.filter(
    (obj, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.categoryNameEn === obj.categoryNameEn &&
          t.categoryNameAr === obj.categoryNameAr
      )
  );
};
