import styles from "./products.module.css";
import cn from "classnames";
import { products } from "@/lib/mock";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 3);

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.products}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
