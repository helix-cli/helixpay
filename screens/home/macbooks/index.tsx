import Image from "next/image";
import styles from "./macbooks.module.css";
import cn from "classnames";
import Link from "next/link";

const MacBooks = () => {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <h2 className={cn("heading-3", styles.title)}>MacBooks.</h2>
            <p className={cn("paragraph-medium", styles.subtitle)}>
              If you’re looking to showcase your work on a MacBook, these
              mockups have you covered. They’re designed to keep focus on your
              project with clean, high-resolution images and just the right
              amount of detail.
            </p>
            <Link
              href="/products/macbooks"
              className={cn("button-stroke-light", styles.button)}
            >
              ✘&nbsp;&nbsp;&nbsp;Shop MacBooks&nbsp;&nbsp;&nbsp;✘
            </Link>
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
      </div>
    </section>
  );
};

export default MacBooks;
