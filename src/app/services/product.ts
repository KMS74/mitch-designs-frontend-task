import { unstable_noStore as noStore } from "next/cache";
import axios from "axios";
import { Category, Product } from "../types/product.type";
import { API_URL, CATEGORY, PRODUCTS_PER_PAGE } from "../constants";
import { removeDuplicates, sleep } from "../utils";

// Get filtered products
export async function fetchFilteredProducts(
  query: string,
  currentPage: number,
  selectedCategory?: string
) {
  noStore(); // Disable caching
  try {
    const res = await axios.get<Product[]>(`${API_URL}/products`, {
      params: {
        _page: currentPage,
        _limit: PRODUCTS_PER_PAGE,
        category_name_ar: selectedCategory ? selectedCategory : undefined,
        q: query,
      },
    });
    // console.log("res.data", res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Get products categories
export async function getProductCategories() {
  try {
    const res = await axios.get<Product[]>(`${API_URL}/products`);
    const products = res.data;

    const productsCategories: Category[] = products.map((product) => {
      return {
        categoryNameEn: product.category_name,
        categoryNameAr: product.category_name_ar,
      };
    });

    // Remove duplicates categories
    const uniqueCategories = removeDuplicates(productsCategories);
    // Return unique categories
    return uniqueCategories;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProductsPages(
  query: string,
  selectedCategory: string
) {
  noStore(); // Disable caching
  try {
    const res = await axios.get<Product[]>(`${API_URL}/products`, {
      params: {
        category_name_ar: selectedCategory ? selectedCategory : undefined,
        q: query,
      },
    });

    return Math.ceil(res.data.length / PRODUCTS_PER_PAGE);
  } catch (error) {
    console.error(error);
    return 0;
  }
}
