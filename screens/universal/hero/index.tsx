import Image from "next/image";
import cn from "classnames";
import styles from "./hero.module.css";
import ArrowRight from "@/components/Icons/ArrowRight";

type HeroProps = {
  category?: {
    id: number;
    slug: string;
    name: string;
    description: string;
  };
};

const Hero = ({ category }: HeroProps) => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={styles.overlay} />

      <Image
        src={`/images/${category?.slug}.jpg`}
        alt={`Hero image for ${category}`}
        layout="fill"
        objectFit="cover"
        className={styles.image}
        priority
      />

      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div>
            <h1 className={cn("hero", styles.title)}>
              {category?.name}

              <br />
              <span>✘ Mockups.</span>
            </h1>
            <p className={cn("paragraph-2x-large", styles.subtitle)}>
              {category?.description}
            </p>
          </div>

          <a href="#products" className={cn("button", styles.button)}>
            Shop Now
            <div className={cn(styles.circle)}>
              <ArrowRight />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
