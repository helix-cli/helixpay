import Image from "next/image";
import styles from "./benefits.module.css";
import cn from "classnames";
import Graduated from "@/components/Icons/Graduated";
import Dollar from "@/components/Icons/Dollar";

const Benefits = () => {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div className={styles.image_wrapper}>
            <Image
              src="/images/demo-1.jpg"
              alt="Illustration Features Tab 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.benefit_content}>
            <div className={styles.benefit_icon}>
              <Graduated />
            </div>

            <h6 className={cn("heading-6", styles.benefit_title)}>
              No Design Skills Required
            </h6>
            <p className={cn("paragraph-medium", styles.benefit_description)}>
              Even if you don’t have extensive design experience, the intuitive
              layout and structure of the mockups allow anyone to create
              stunning presentations of their work with ease.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.benefit_content}>
            <div className={styles.benefit_icon}>
              <Dollar />
            </div>

            <h6 className={cn("heading-6", styles.benefit_title)}>
              Ready for Commercial Use
            </h6>
            <p className={cn("paragraph-medium", styles.benefit_description)}>
              With these mockups, you can present your designs to clients,
              showcase your portfolio, or even sell digital products—all with
              the assurance that you’re using high-quality, professional assets.
            </p>
          </div>

          <div className={styles.image_wrapper}>
            <Image
              src="/images/demo-3.jpg"
              alt="Illustration Features Tab 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
