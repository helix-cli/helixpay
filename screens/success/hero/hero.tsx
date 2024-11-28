import styles from "./hero.module.css";
import cn from "classnames";
import Party from "@/components/Icons/Party";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <Party />
          </div>

          <div className={cn("heading-3", styles.title)}>
            Thank you for your purchase!
          </div>

          <p className={cn("paragraph-medium", styles.subtitle)}>
            Your order was successful! You will receive an email shortly with
            the details and download links for your files.
          </p>

          <Link href="/" className={cn("button", styles.button)}>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
