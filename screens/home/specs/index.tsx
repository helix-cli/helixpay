import styles from "./specs.module.css";
import cn from "classnames";

const specs = [
  {
    id: 1,
    title: "File Formats",
    subtitle: "PSD, PNG, JPG",
  },
  {
    id: 2,
    title: "Resolution",
    subtitle: "3000 DPI",
  },
  {
    id: 3,
    title: "Dimensions",
    subtitle: "4000 x 3000px",
  },
  {
    id: 4,
    title: "Compatibility",
    subtitle: "Adobe Photoshop",
  },
  {
    id: 4,
    title: "License Type",
    subtitle: "Commercial Use",
  },
];

const Specs = () => {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <h6 className={cn("heading-6", styles.title)}>
          Technical Specifications
        </h6>

        <div className={styles.specs}>
          {specs.map((spec) => (
            <div key={spec.id} className={styles.spec}>
              <p className={cn("paragraph-large", styles.spec_title)}>
                {spec.title}
              </p>
              <p className={cn("paragraph-medium", styles.spec_subtitle)}>
                {spec.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;
