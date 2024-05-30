import { Suspense } from "react";
import PageTitle from "./components/PageTitle/PageTitle";
import ProductsList from "./components/ProductsList/ProductsList";
import SearchBox from "./components/SearchBox/SearchBox";
import ShoppingCartFAB from "./components/ShoppingCartFAB/ShoppingCartFAB";
import ProductsSkeleton from "./components/ProductSkeleton/ProductsSkeleton";

export default async function Home() {
  return (
    <main
      className="min-h-screen container relative
     mx-auto p-4"
    >
      <SearchBox />
      <ShoppingCartFAB />

      <PageTitle title="جميع منتجات القهوة" />
      <Suspense
        fallback={
          <ProductsSkeleton />
        }
      >
        <ProductsList />
      </Suspense>
    </main>
  );
}
