import { categories } from "@/lib/mock";
import styles from "./product-card.module.css";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import CheckoutButton from "../CheckoutButton";

type Product = {
  id: number;
  title: string;
  price: string;
  images: string[];
  category_id: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const category = categories.find((c) => c.id === product.category_id);

  return (
    <figure key={product.id} className={styles.product}>
      <Link href={`/products/${category?.slug}/${product.id}`}>
        <div className={styles.product_img}>
          <Image
            src={product.images[0]}
            layout="fill"
            objectFit="cover"
            alt="Featured Product"
            className={styles.img}
          />
        </div>
      </Link>

      <div className={styles.product_content}>
        <h6 className={cn("paragraph-large", styles.product_title)}>
          {product.title}
        </h6>
        <h6 className={cn("paragraph-medium")}>${product.price}</h6>

        <CheckoutButton product={product} className={styles.button} />
      </div>
    </figure>
  );
};

export default ProductCard;
