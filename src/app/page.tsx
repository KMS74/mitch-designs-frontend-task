import PageTitle from "@/app/components/PageTitle/PageTitle";
import ProductCard from "./components/ProductCard/ProductCard";
import SearchBox from "./components/SearchBox/SearchBox";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto p-4">
      <SearchBox />
      
      <PageTitle title="جميع منتجات القهوة" />

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 py-8">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </section>
    </main>
  );
}
