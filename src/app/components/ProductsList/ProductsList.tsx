import ProductCard from "../ProductCard/ProductCard";
import { fetchFilteredProducts } from "@/app/services/product";

const ProductsList = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const products = await fetchFilteredProducts(query, currentPage);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 py-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductsList;
