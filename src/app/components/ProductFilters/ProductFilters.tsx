"use client";

import { getProductCategories } from "@/app/services/product";
import { Category } from "@/app/types/product.type";
import { useState, useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import CategoriesSkeleton from "../CategoriesSkeleton/CategoriesSkeleton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ProductFilters = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const getCategories = async () => {
    try {
      setLoading(true);
      const categories = await getProductCategories();
      setCategories(categories);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryFilter = (category: Category) => {
    const params = new URLSearchParams(searchParams);

    if (isSelectedCategory(category)) {
      params.delete("category");
      params.delete("page");
    } else {
      params.set("page", "1");
      params.set("category", category.categoryNameAr);
    }

    replace(`${pathname}?${params.toString()}`);
  };
  const isSelectedCategory = (category: Category) => {
    const selectedCategory = searchParams.get("category");
    return selectedCategory === category.categoryNameAr;
  };

  useEffect(() => {
    getCategories();
  }, []);

  return loading ? (
    <CategoriesSkeleton />
  ) : (
    <section className=" w-full py-4 mt-8">
      <div className="flex gap-3 items-center overflow-x-auto whitespace-nowrap">
        {categories.map((category) => (
          <button
            key={category.categoryNameAr}
            type="button"
            className={`inline-flex justify-center items-center gap-2 text-primary-950 bg-primary-50  font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 ${
              isSelectedCategory(category)
                ? "bg-primary-950 text-primary-50"
                : ""
            }`}
            onClick={() => handleCategoryFilter(category)}
          >
            <span>{category.categoryNameAr}</span>
            {isSelectedCategory(category) && <IoMdCloseCircle size={20} />}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductFilters;
