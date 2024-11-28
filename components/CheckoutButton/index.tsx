"use client";

import styles from "./checkout-button.module.css";
import cn from "classnames";

type Product = {
  id: number;
  title: string;
  price: string;
  images: string[];
  category_id: number;
};

type CheckoutButtonProps = {
  product: Product;
  className?: string;
};

const CheckoutButton = ({ product, className }: CheckoutButtonProps) => {
  const handleCheckout = async (product: Product) => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const session = await response.json();

    window.location.href = session.url;
  };

  return (
    <button
      className={cn("button-stroke", styles.button, className)}
      onClick={() => handleCheckout(product)}
    >
      ✘&nbsp;&nbsp;&nbsp;Buy Now&nbsp;&nbsp;&nbsp;✘
    </button>
  );
};

export default CheckoutButton;
