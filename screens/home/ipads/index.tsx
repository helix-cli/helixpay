import Image from "next/image";
import styles from "./ipads.module.css";
import cn from "classnames";
import Decorations from "@/components/Decorations";
import Link from "next/link";

const Ipads = () => {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <Decorations />

        <div className={styles.content}>
          <div className={styles.image_container}>
            <Image
              src="/images/ipads.jpg"
              layout="fill"
              objectFit="cover"
              alt="iphones"
            />
          </div>

          <div className={styles.title_container}>
            <h2 className={cn("heading-3", styles.title)}>iPads.</h2>
            <p className={cn("paragraph-medium", styles.subtitle)}>
              Bring your app and website designs to life with our easy-to-use
              iPad mockups. These clean, high-resolution mockups provide the
              perfect canvas to showcase your work on the latest iPad models.
            </p>
            <Link
              href="/products/ipads"
              className={cn("button-stroke", styles.button)}
            >
              ✘&nbsp;&nbsp;&nbsp;Shop iPads&nbsp;&nbsp;&nbsp;✘
            </Link>
          </div>
        </div>

        <Decorations />
      </div>
    </section>
  );
};

export default Ipads;
