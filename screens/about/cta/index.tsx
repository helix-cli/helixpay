import Image from "next/image";
import styles from "./cta.module.css";
import cn from "classnames";
import ArrowRight from "@/components/Icons/ArrowRight";

const CTA = () => {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.overlay} />

        <div className={styles.images}>
          <div className={styles.image_wrapper}>
            <Image
              src="/images/iphones.jpg"
              alt="CTA"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className={styles.image_wrapper}>
            <Image
              src="/images/macbooks.jpg"
              alt="CTA"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className={styles.content}>
          <h3 className={cn("heading-3")}>
            {"Shop the internet's favorite mockups."}
          </h3>

          <button className={cn("button", styles.button)}>
            Shop Now
            <div className={cn(styles.circle)}>
              <ArrowRight />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
