import Image from "next/image";
import cn from "classnames";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={styles.overlay} />

      <div className={styles.images}>
        <div className={styles.image_container}>
          <Image
            src="/images/macbooks.jpg"
            alt="iPhones"
            layout="fill"
            objectFit="cover"
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.image_container}>
          <Image
            src="/images/iphones.jpg"
            alt="iPhones"
            layout="fill"
            objectFit="cover"
            className={styles.image}
            priority
          />
        </div>
      </div>

      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div>
            <h1 className={cn("hero", styles.title)}>
              About
              <br />
              <span>✘ Mockups.</span>
            </h1>
            <p className={cn("paragraph-2x-large", styles.subtitle)}>
              Each mockup is crafted to help designers, marketers, and creatives
              showcase their work with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
