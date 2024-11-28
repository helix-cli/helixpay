import styles from "./features.module.css";
import cn from "classnames";

const product_features = [
  {
    id: 1,
    title: "10 iPhones mockups",
    number: `01`,
  },
  {
    id: 2,
    title: "High-Resolution Mockups",
    number: `02`,
  },
  {
    id: 3,
    title: "Multiple iPhone Models",
    number: `03`,
  },
  {
    id: 4,
    title: "Customizable Smart Objects",
    number: `04`,
  },
  {
    id: 5,
    title: "Realistic Shadows & Reflections",
    number: `05`,
  },
];

const Features = () => {
  return (
    <section className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <h3 className={cn("heading-3", styles.title)}>What’s included</h3>

        <div className={styles.product_features}>
          {product_features.map((feature) => (
            <div className={styles.product_feature} key={feature.id}>
              <p className={cn("paragraph-medium", styles.feature_title)}>
                {feature.title}
              </p>
              <p className={cn("paragraph-large", styles.feature_number)}>
                {feature.number}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
