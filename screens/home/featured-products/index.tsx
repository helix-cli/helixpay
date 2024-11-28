import styles from "./featured-products.module.css";
import cn from "classnames";
import { products } from "@/lib/mock";
import ProductCard from "@/components/ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 3);

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <h6 className={cn("heading-6")}>
          Meet the internet’s favorite mockups.
        </h6>

        <div className={styles.products}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
