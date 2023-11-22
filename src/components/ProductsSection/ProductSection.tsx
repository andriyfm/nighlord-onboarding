import { useProductContext } from "@/contexts/ProductContext";
import { ProductCard } from "./ProductCard";
import { UploadProductButton } from "./UploadProductButton";

export const ProductsSection = () => {
  const { products } = useProductContext();

  return (
    <section className="flex items-start gap-[44px] flex-wrap">
      {products?.map((_item, index) => (
        <ProductCard key={index} />
      ))}
      <UploadProductButton />
    </section>
  );
};
