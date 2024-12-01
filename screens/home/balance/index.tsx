import Image from "next/image";
import styles from "./balance.module.css";
import cn from "classnames";
import ArrowRight from "@/components/Icons/ArrowRight";
import Decorations from "@/components/Decorations";

const Balance = () => {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <Decorations />

        <div className={styles.content}>
          <div className={styles.title_container}>
            <h2 className={cn("heading-3", styles.title)}>
             Balance.
            </h2>
            <p className={cn("paragraph-medium", styles.subtitle)}>
              Get the tools to present your designs in their best light. Our
              mockup collection has everything you need to impress clients and
              audiences alike.
            </p>
            <button className={cn("button", styles.button)}>
              Discover the collection
              <div className={cn(styles.circle)}>
                <ArrowRight />
              </div>
            </button>
          </div>

          <div className={styles.image_container}>
            <Image
              src="/images/macbooks.jpg"
              layout="fill"
              objectFit="cover"
              alt="iphones"
            />
          </div>
        </div>

        <Decorations />
      </div>
    </section>
  );
};

export default Balance;
