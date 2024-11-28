import Image from "next/image";
import cn from "classnames";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={styles.overlay} />

      <Image
        src="/images/slide-1.jpg"
        alt="iPhones"
        layout="fill"
        objectFit="cover"
        className={styles.image}
        priority
      />

      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div>
            <h1 className={cn("hero", styles.title)}>
              Contact
              <br />
              <span>✘ Mockups.</span>
            </h1>
            <p className={cn("paragraph-2x-large", styles.subtitle)}>
              We’re here to help! Reach out for inquiries, support, or
              partnership opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
