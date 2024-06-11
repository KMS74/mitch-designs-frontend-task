export type Product = {
  id: number;
  status: string;
  name: string;
  ar_name: string;
  category_name: string;
  category_slug: string;
  category_name_ar: string;
  is_kilo: boolean;
  slug: string;
  sale_price: string;
  price: string;
  main_image: string | boolean;
  type: string;
  availability: "instock" | "outofstock";
  images?: string[];
  price_uae: string;
  sale_price_uae: string;
};

export type Category = {
  categoryNameEn: string;
  categoryNameAr: string;
};
