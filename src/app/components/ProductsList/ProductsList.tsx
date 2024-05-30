import { Product } from "@/app/types/product.type";
import ProductCard from "../ProductCard/ProductCard";
import productService from "@/app/services/product";

const ProductsList = async () => {
  const products: Product[] = await productService.fetchProducts(1);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 py-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductsList;
