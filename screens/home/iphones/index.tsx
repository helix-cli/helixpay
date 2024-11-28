import Image from "next/image";
import styles from "./iphones.module.css";
import cn from "classnames";
import Link from "next/link";

const Iphones = () => {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <h2 className={cn("heading-3", styles.title)}>iPhones.</h2>
            <p className={cn("paragraph-medium", styles.subtitle)}>
              Easily present your app designs with these clean, realistic iPhone
              mockups. Featuring simple customization, various perspectives, and
              clear, high-quality graphics, they’re ideal for portfolios,
              presentations, or social media.
            </p>
            <Link
              href="/products/iphones"
              className={cn("button-stroke-light", styles.button)}
            >
              ✘&nbsp;&nbsp;&nbsp;Shop iPhones&nbsp;&nbsp;&nbsp;✘
            </Link>
          </div>

          <div className={styles.image_container}>
            <Image
              src="/images/iphones.png"
              layout="fill"
              objectFit="cover"
              alt="iphones"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iphones;
