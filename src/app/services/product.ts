import { unstable_noStore as noStore } from "next/cache";
import axios from "axios";
import { Product } from "../types/product.type";
import { API_URL, CATEGORY, PRODUCTS_PER_PAGE } from "../constants";

// Get filtered products
export async function fetchFilteredProducts(
  query: string,
  currentPage: number
) {
  noStore(); // Disable caching
  try {
    const res = await axios.get<Product[]>(`${API_URL}/products`, {
      params: {
        _page: currentPage,
        _limit: PRODUCTS_PER_PAGE,
        category_name: CATEGORY,
        q: query,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
