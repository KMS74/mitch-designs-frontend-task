import { Suspense } from "react";

import PageTitle from "./components/PageTitle/PageTitle";
import ProductsList from "./components/ProductsList/ProductsList";
import SearchBox from "./components/SearchBox/SearchBox";
import ShoppingCartFAB from "./components/ShoppingCartFAB/ShoppingCartFAB";
import ProductsSkeleton from "./components/ProductSkeleton/ProductsSkeleton";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import { getProductsPages } from "./services/product";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getProductsPages(query);

  return (
    <main
      className="min-h-screen container relative
     mx-auto p-4"
    >
      <SearchBox />
      <ShoppingCartFAB />

      <Breadcrumb currentPage="القهوة" />

      <PageTitle title="جميع منتجات القهوة" />
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductsList query={query} currentPage={currentPage} />
      </Suspense>

      {currentPage < totalPages && <LoadMoreButton totalPages={totalPages} />}
    </main>
  );
}
