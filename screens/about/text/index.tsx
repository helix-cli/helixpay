import styles from "./about.module.css";
import cn from "classnames";

const Text = () => {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.divider} />

        <div className={styles.content}>
          <div className={cn("subheading-medium", styles.text)}>About</div>

          <div className={styles.title_container}>
            <div className={cn("heading-2", styles.title)}>
              Your one-stop shop for high-quality, versatile mockups.
            </div>

            <div className={styles.divider} />

            <div className={cn("paragraph-large", styles.subtitle)}>
              We believe that great design deservers great presentation, so
              we’ve created a collection of polished, realistic mockups for
              iPhones, iPads, MacBooks, and more.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text;
