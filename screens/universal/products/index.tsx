import styles from "./products.module.css";
import cn from "classnames";
import { products } from "@/lib/mock";
import ProductCard from "@/components/ProductCard";
import ChevronDown from "@/components/Icons/ChevronDown";

type ProductsProps = {
  category?: {
    id: number;
    slug: string;
    name: string;
    description: string;
  };
};

const Products = ({ category }: ProductsProps) => {
  const filteredProducts = products.filter(
    (product) => product.category_id === category?.id,
  );

  return (
    <section id="products" className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.select_container}>
          <p className={cn("paragraph-medium", styles.text)}>Filter by: </p>

          <div className={styles.select_wrapper}>
            <select className={cn("label-medium", styles.select)}>
              <option value="all">Choose an option</option>
              <option value="best-selling">Best selling</option>
              <option value="price-ascending">Price, low to high</option>
              <option value="price-descending">Price, high to low</option>
            </select>

            <ChevronDown />
          </div>
        </div>
        <div className={styles.products}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
