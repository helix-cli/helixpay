import Image from "next/image";
import cn from "classnames";
import styles from "./slider.module.css";
import ArrowRight from "../Icons/ArrowRight";
import Link from "next/link";

type SliderProps = {
  image: string;
  title: string;
  subtitle: string;
  slug: string;
  type?: "iphones" | "macbooks" | "ipads";
};

const Slider = ({
  image,
  title,
  subtitle,
  slug,
  type = "iphones",
}: SliderProps) => {
  return (
    <div
      className={cn("section", styles.section, {
        [styles.macbooks]: type === "macbooks",
        [styles.ipads]: type === "ipads",
      })}
    >
      <div className={styles.overlay} />

      <Image
        src={image}
        alt="iPhone 16 Pro Mockups"
        layout="fill"
        objectFit="cover"
        className={styles.image}
        priority
      />

      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div>
            <h1 className={cn("hero", styles.title)}>
              {title}
              <br />
              <span>✘ Mockups.</span>
            </h1>
            <p className={cn("paragraph-2x-large", styles.subtitle)}>
              {subtitle}
            </p>
          </div>

          <Link
            href={`/products/${slug}`}
            className={cn("button", styles.button)}
          >
            Shop Now
            <div className={cn(styles.circle)}>
              <ArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
