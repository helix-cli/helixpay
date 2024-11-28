import Image from "next/image";
import styles from "./gift.module.css";
import cn from "classnames";

const Gift = () => {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <h2 className={cn("heading-3", styles.title)}>
              Free MacBook Pro Mockups.
            </h2>
            <p className={cn("paragraph-medium", styles.subtitle)}>
              High-quality iPhone mockups designed to inspire and simplify, a
              practical gift choice for every designer’s toolkit.
            </p>
            <button className={cn("button-stroke-light", styles.button)}>
              ✘&nbsp;&nbsp;&nbsp;Get it for free&nbsp;&nbsp;&nbsp;✘
            </button>
          </div>

          <div className={styles.image_container}>
            <Image
              src="/images/echo-mockups/01.jpg"
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

export default Gift;
