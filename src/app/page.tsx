import { Suspense } from "react";
import PageTitle from "./components/PageTitle/PageTitle";
import ProductsList from "./components/ProductsList/ProductsList";
import SearchBox from "./components/SearchBox/SearchBox";
import ShoppingCartFAB from "./components/ShoppingCartFAB/ShoppingCartFAB";
import ProductsSkeleton from "./components/ProductSkeleton/ProductsSkeleton";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import { getProductsPages } from "./services/product";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import ProductFilters from "./components/ProductFilters/ProductFilters";
import CategoriesSkeleton from "./components/CategoriesSkeleton/CategoriesSkeleton";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    category?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const selectedCategory = searchParams?.category || "";
  const totalPages = await getProductsPages(query, selectedCategory);

  return (
    <main
      className="min-h-screen container relative
     mx-auto p-4"
    >
      <SearchBox />

      <ShoppingCartFAB />

      <Breadcrumb currentPage="القهوة" />

      <PageTitle title="جميع منتجات القهوة" />

      <ProductFilters />

      <Suspense fallback={<ProductsSkeleton />}>
        <ProductsList
          query={query}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
        />
      </Suspense>

      {currentPage < totalPages && <LoadMoreButton totalPages={totalPages} />}
    </main>
  );
}
